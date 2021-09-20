import React from "react";
import AllThreads from "../organisms/AllThreads";

import "../css/board_descripton.css"
import BoardInfo from "../molecules/BoardInfo";


export default (props) => {
    return (
        <>
            <h1>{props.headerText}</h1>
            <section class="green-container">
                <BoardInfo title={props.board.title} descriptionHtml={props.board.description} />
            </section>
            <section id="display-threads-section" class="green-container">
                <AllThreads threads={props.board.threads} />
            </section>
        </>
    );
}