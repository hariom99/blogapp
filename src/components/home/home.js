import React, { Component } from "react";
import "./home.css"
import Latest from "./latest/latest";
import TopPosts from "./top-posts/topPosts";
import Articles from "../../context/articleContext/articleContext";
import LatestArticle from "./latestArticle/latestArticle";



export default class Home extends Component {
    render() {
        return (
            <>
                <div className="card-container">
                    <div className="div1">
                        <h1>Title of Vertical Gallery</h1>
                        <span>Travel / 12 july 2021</span>
                    </div>


                    <div className="div2">
                        <div className="cdiv1">
                            <h2>The sound cloud You loved is doomed</h2>
                            <span>Travel / april 12 2013</span>
                        </div>
                        <div className="cdiv2">
                            <h2>The sound cloud You loved is doomed</h2>
                            <span>Travel / april 12 2013</span>
                        </div>
                    </div>
                </div>

                <Latest />

                <Articles>
                    <LatestArticle />
                </Articles>

                {/* <br /> */}
                <TopPosts />
            </>
        );
    }
}
