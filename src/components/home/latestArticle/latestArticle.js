import React, { Component } from "react";
import "./latestArticle.css"

/* images import starts */
import img1 from "../../../images/home/latest-article/img1.jpg"
/* images import ends */


export default class LatestArticle extends Component {
    render() {
        let latestArticle = [1, 2, 3];
        return (
            <div className="latest-article-parent" >
                <div className="latest-article-heading" >
                    <span>Latest </span>
                    Articles
                </div>
                <div className="latest-article-container" >
                    <div className="card-container-lac">

                        {latestArticle.map((val, ind) => {


                            return <div className="card" key={ind} >
                                <img className="lac-img" src={img1} alt="" />
                                <div className="card-text" >
                                    <span className="card-heading" >
                                        Catch waves with an
                                        adventure guide
                                    </span>
                                    <p>
                                        Gujarat is vastly underrated
                                        and it's a mystery the region is'nt
                                        more well
                                    </p>
                                    <p><span className="travel-text" >Travel </span> <span className="travel-date" >/ August 21 2017</span></p>
                                </div>
                            </div>

                        })}
                        <div>Load More &#8595;</div>
                    </div>
                    <div className="advertisement" >
                        <p> Advertisement</p>
                    </div>

                </div>
            </div>);
    }
}