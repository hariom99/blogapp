import React, { Component } from "react";
import "./home.css"
import Latest from "./latest/latest";
import LatestArticle from "./latestArticle/latestArticle";
import TopPosts from "./top-posts/topPosts";


export default class Home extends Component {
    render() {
        return (
            <>
                <div className="card-container">
                    <div className="div1">

                    </div>


                    <div className="div2">
                        <div className="cdiv1">

                        </div>
                        <div className="cdiv2">

                        </div>
                    </div>
                </div>

                <Latest />
                <LatestArticle />
                <br />
                <TopPosts />
            </>
        );
    }
}