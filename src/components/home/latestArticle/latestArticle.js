import React, { useState, useContext } from "react";
import { withRouter } from "react-router";
import { ArticlesContext } from "../../../context/articleContext/articleContext";
import "./latestArticle.css"

/* images import starts */
import img1 from "../../../images/home/latest-article/img1.jpg"
/* images import ends */


function LatestArticle(props) {
    const articles = useContext(ArticlesContext);
    const [count, setCount] = useState(3);
    // console.log(articles[0]);
    const loadMore = () => {
        setCount(() => {
            return count + 3;
        })
        // console.log("load more called..");
    }
    // let latestArticle = [1, 2, 3];

    // console.log(props);


    const viewArticle = (id, ob) => {
        // console.log(id);
        // console.log(ob);
        props.history.push(`/articles/${id}`, ob);
    }

    return (
        <div className="latest-article-parent" >
            <div className="latest-article-heading" >
                <span>Latest </span>
                Articles
            </div>
            <div className="latest-article-container" >
                <div className="card-container-lac">

                    {articles.map((val, ind) => {

                        if (ind >= count) {
                            return null;
                        }

                        return <div onClick={() => viewArticle(ind, val)} className="card" key={ind} >
                            <img className="lac-img" src={val.img} alt="" />
                            <div className="card-text" >
                                <span className="card-heading" >
                                    {val.heading}
                                </span>
                                <p>
                                    {val.desc}
                                </p>
                                <p><span className="travel-text" >{val.type} </span> <span className="travel-date" >{val.date}</span></p>
                            </div>
                        </div>

                    })}
                    <div className="load-more-articles" onClick={loadMore} >Load More &#8595;</div>
                </div>
                <div className="advertisement" >
                    <p> Advertisement</p>
                </div>

            </div>
        </div>);
}

export default withRouter(LatestArticle);