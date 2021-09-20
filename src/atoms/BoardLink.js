import React from "react";

const BoardLink = (props) => {
    return (
        <><a class="board-anchor" href={props.href}>{props.title}</a><span> / </span></>
    );
}

export default BoardLink;