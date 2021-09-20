import React from "react";
import AllThreads from "../organisms/AllThreads";
import "../css/display_all_threads.css"

export default (props) => {
    return (
        <>
            <h1>{props.headerText}</h1>
            <div class="all-threads">
                <AllThreads threadsByCategory={props.threadsByCategory} />
            </div>
        </>
    );
}