import React, { useState, createRef } from "react";
import { withRouter } from "react-router";
import "./header.css";
import icon from "./bar.png";
function Header(prop) {

    const navLinks = (comp) => {
        prop.history.push(comp);
        if (window.innerWidth < 700) {
            toggler();
        }

    }
    // console.log(window.innerWidth);



    let refNav = createRef(null);
    let [navVisible, setNavVisible] = useState(false);

    let toggler = () => {
        console.log(navVisible);
        if (navVisible) {
            refNav.current.style.display = "none";
            setNavVisible(() => { return !navVisible });
        }
        else {
            refNav.current.style.display = "block";
            setNavVisible(() => { return !navVisible });
        }

    }
    return <>

        <div className="header">
            <div className="header-the">
                The
            </div>
            <div className="header-siren">Siren</div>
            <span className="toggle" onClick={toggler} >
                <img className="icon" src={icon} alt="icon" />
            </span>
        </div>
        <div className="nav-links" >

            <ul>

                {/* {navVisible ? */}
                <div ref={refNav} className="nav-link-container" id="nav-link-container" >
                    <li onClick={() => navLinks("/")} >Home</li>
                    <li onClick={() => navLinks("/bollywood")} >Bollywood</li>
                    <li onClick={() => navLinks("/technology")} >Technology</li>
                    <li onClick={() => navLinks("/hollywood")} >Hollywood</li>
                    <li onClick={() => navLinks("/fitness")} >Fitness</li>
                    <li onClick={() => navLinks("/food")} >Food</li>
                </div>
                {/* : null} */}
            </ul>
        </div>

        <hr className="header-hr" />
    </>;
}
export default withRouter(Header);
// bollywood -> /bollywood

// <Link to="/bollywood">