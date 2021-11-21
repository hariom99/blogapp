import React from "react";
import "./latest.css"
import wolf from "../../../images/home/latest/wolf.jpg"


export default function Latest() {
    let arr = [1, 2, 3];
    return (
        <div className="latest-parent" >
            <div className="latest-heading" ><span>The </span> Latest</div>

            <div className="latest-card-parent" >
                {arr.map((val, ind) => {

                    return <div key={ind} className="latest-card" >
                        <img className="latest-card-img" src={wolf} alt="" />
                        <div className="latest-card-text" >
                            <span className="blog-heading" >
                                There will be some tree name</span>
                            <p>there is paragraph detailing about
                                current blog. There is something you
                                don't know about it. But You should know about it.
                            </p>
                            <p><span className="travel-text" >Travel </span> <span className="travel-date" >/ August 21 2017</span></p>
                        </div>
                    </div>
                })}

            </div>
        </div>
    );
}