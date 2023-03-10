import React from "react";
import { Link

} from "react-router-dom";

const Nav=()=>{
    return(
        <div>
             <ul className="header-ul">
                <li><Link to='/'>Product</Link></li>
                <li><Link to='/add'>Add Product</Link></li>
                <li><Link to='/update'>UpdateProduct</Link></li>
                <li><Link to='/login'>login</Link></li>
                <li><Link to='/logout'>logout</Link></li>
             </ul>
        </div>
    )
}
export default Nav;