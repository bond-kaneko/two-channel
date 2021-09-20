import React from "react";
import ThreadLink from "../atoms/ThreadLink";

export default (props) => {
    return (
        <>
            {props.threads.map((thread, idx) =>
                <ThreadLink title={thread.title} href={thread.href} idx={idx} />
            )}
        </>
    );
}