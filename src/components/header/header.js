import React from "react";
import { withRouter } from "react-router";


function Header(prop) {

    const navLinks = (comp) => {
        // console.log(prop);
        // console.log(comp);
        prop.history.push(comp);
    }

    return <><div className="header">
        <div className="header-the">
            The
        </div>
        <div className="header-siren">Siren</div>
    </div>
        <div className="nav-links" >
            <ul>
                <li onClick={() => navLinks("/")} >Home</li>
                <li onClick={() => navLinks("/bollywood")} >Bollywood</li>
                <li onClick={() => navLinks("/technology")} >Technology</li>
                <li onClick={() => navLinks("/hollywood")} >Hollywood</li>
                <li onClick={() => navLinks("/fitness")} >Fitness</li>
                <li onClick={() => navLinks("/food")} >Food</li>
            </ul>
        </div>
        <span className="toggle" >toggle</span>
        <hr className="header-hr" />
    </>;
}
export default withRouter(Header);
// bollywood -> /bollywood

// <Link to="/bollywood">