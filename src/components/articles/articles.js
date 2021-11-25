import React from "react";
import img from "../../images/home/latest-article/img1.jpg"
import "./articles.css"

export default function ViewArticles(prop) {
    console.log(prop.location.state);
    return (
        <div className="article-container" >
            <img className="aimg" src={img} alt="hii" />
            <h1>{prop.location.state.heading}</h1>
            <div>{prop.location.state.desc +
                prop.location.state.desc +
                prop.location.state.desc
            }</div>

            <h4>{prop.location.state.type}</h4>
            <span>{prop.location.state.date}</span>
        </div>
    );
}