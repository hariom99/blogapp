import React from "react";
import img1 from "../../images/home/latest/t1.jpg";

const LatestPost3 = () => {

    return (
        <div className="container-blog" >

            <img className="posts" src={img1} alt="hii" />
            <h1>Traveling is also important for happy life</h1>
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

export default LatestPost3;