import React from "react";
import ThreadLink from "../atoms/ThreadLink";
import "../css/board_descripton.css"


export default (props) => {
    return (
        <>
            <h1>{props.headerText}</h1>
            <section class="green-container">
                <h2>{props.board.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: props.board.description.replace(/\n/g, "<br />") }}></div>
            </section>
            <section id="display-threads-section" class="green-container">
                <ThreadLink title="スレ１" href="#" />
            </section>
        </>
    );
}