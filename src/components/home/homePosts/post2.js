import React from "react";
import img2 from "../../../images/home/img2.jpg";
import "./posts.css";

const Post2 = () => {

    return (
        <div className="container-blog" >

            <img className="posts" src={img2} alt="hii" />
            <h1>Title of vertical gallery</h1>
            <div>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32
            </div>
            <br />
            <h4>Travel</h4>
            <span> / 12 july 2021</span>
        </div>
    );
}

export default Post2;