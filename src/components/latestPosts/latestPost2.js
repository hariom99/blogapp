import React from "react";
import img1 from "../../images/home/latest/f1.jpg";

const LatestPost2 = () => {

    return (
        <div className="container-blog" >

            <img className="posts" src={img1} alt="hii" />
            <h1>Fitness is the key for healthy life</h1>
            <div>
                here is paragraph detailing about current blog. There is something you don't know about it. But You should know about it.
                here is paragraph detailing about current blog. There is something you don't know about it. But You should know about it.
                here is paragraph detailing about current blog. There is something you don't know about it. But You should know about it.
            </div>
            <br />
            <h4>Travel</h4>
            <span> / August 21 2021</span>
        </div>
    );
}

export default LatestPost2;