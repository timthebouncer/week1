import React, { useState } from "react";
import { isEmpty } from "lodash";


const initState = props => {
  return {
    data: {},
    validators: {},
    errors: {}
  };
};

let FormContext;
const { Provider } = (FormContext = React.createContext());

const Form = props => {
  const [formState, setFormState] = useState(initState(props));

  const onSubmit = e => {
    e.preventDefault();

    if (validate()) {
      props.onSubmit(formState.data);
    }
  };

  const validate = () => {
    const { validators } = formState;

    // always reset form errors
    // in case there was form errors from backend
    setFormState(state => ({
      ...state,
      errors: {}
    }));

    if (isEmpty(validators)) {
      return true;
    }

    const formErrors = Object.entries(validators).reduce(
      (errors, [name, validators]) => {
        const { data } = formState;
        const messages = validators.reduce((result, validator) => {
          const value = data[name];
          const err = validator(value, data);
          return [...result, ...err];
        }, []);

        if (messages.length > 0) {
          errors[name] = messages;
        }

        return errors;
      },
      {}
    );
    if (isEmpty(formErrors)) {
      return true;
    }

    setFormState(state => ({
      ...state,
      errors: formErrors
    }));

    return false;
  };

  // const onReset = e => {
  //   e.preventDefault();
  //   setFormState(initState(props));
  //   if (props.onReset) {
  //     props.onReset();
  //   }
  // };

  const setFieldValue = (name, value) => {
    setFormState(state => {
      return {
        ...state,
        data: {
          ...state.data,
          [name]: value
        },
        errors: {
          ...state.errors,
          [name]: []
        }
      };
    });
  };

  const registerInput = ({ name, validators }) => {
    setFormState(state => {
      return {
        ...state,
        validators: {
          ...state.validators,
          [name]: validators || []
        },
        // clear any errors
        errors: {
          ...state.errors,
          [name]: []
        }
      };
    });

    // returning unregister method
    return () => {
      setFormState(state => {
        // copy state to avoid mutating it
        const { data, errors, validators: currentValidators } = { ...state };

        // clear field data, validations and errors
        delete data[name];
        delete errors[name];
        delete currentValidators[name];

        return {
          data,
          errors,
          validators: currentValidators
        };
      });
    };
  };

  const providerValue = {
    errors: formState.errors,
    data: formState.data,
    setFieldValue,
    registerInput
  };
  console.log(providerValue)
  return (
    <Provider value={providerValue}>
      <form
        onSubmit={onSubmit}
        // onReset={onReset}
        className={props.className}
        id={props.id}
      >
        {props.children}
      </form>
    </Provider>
  );
};


export default Form;
export { FormContext };
