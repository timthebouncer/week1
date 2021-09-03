import React from "react";
import {Link} from "react-router-dom";

const HeaderPage=()=>{

  return(
    <div className="flex justify-between	">
      <div>
        <div>Logo</div>
      </div>
      <div className="flex justify-evenly w-1/12">
        <Link to='/index'><div>首頁</div></Link>
        <Link to='/news'> <div>最新消息</div></Link>
      </div>
    </div>

)


}
export default HeaderPage;
