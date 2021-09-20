import React from "react";

const ThreadLink = (props) => {
    return (
        <><a href={props.href}>{props.title}</a><span> / </span></>
    );
}

export default ThreadLink;