import React from "react";

export default (props) => {
    return (
        <><a class="thread-anchor" href={props.href}>{props.idx + ": " + props.title}</a><span> / </span></>
    );
}
