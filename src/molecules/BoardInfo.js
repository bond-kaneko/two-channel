import React from "react";

export default (props) => {
    return (
        <>
            <h2>{props.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: props.descriptionHtml.replace(/\n/g, "<br />") }}></div>
        </>
    );
}