import React from "react";
import img from "../../images/home/latest-article/img1.jpg"
import "./blogPost.css"
export default function BlogPost(prop) {
    console.log(prop.location.state);
    return (
        <div className="container-blog" >

            <img className="bimg" src={img} alt="hii" />
            <h1>{prop.location.state.blogHead}</h1>
            <div>{prop.location.state.blogDesc +
                prop.location.state.blogDesc +
                prop.location.state.blogDesc
            }</div>
            <br />
            <h4>{prop.location.state.type}</h4>
            <span>{prop.location.state.date}</span>
        </div>
    );
}