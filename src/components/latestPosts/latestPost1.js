import React from "react";
import img1 from "../../images/home/latest/wolf.jpg";

const LatestPost1 = () => {

    return (
        <div className="container-blog" >

            <img className="posts" src={img1} alt="hii" />
            <h1>Wolf is craziest animal while eating</h1>
            <div>
                there is paragraph detailing about wolf. Wolf is craziest animal while eating, wolf. while eating, Stay away from it.
                there is paragraph detailing about wolf. Wolf is craziest animal while eating, wolf. while eating, Stay away from it.

            </div>
            <br />
            <h4>Travel</h4>
            <span> / August 21 2021</span>
        </div>
    );
}

export default LatestPost1;