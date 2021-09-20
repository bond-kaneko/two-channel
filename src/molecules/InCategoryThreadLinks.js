import React from "react";
import ThreadLink from "../atoms/ThreadLink";

const InCategoryThreadLinks = (props) => {
    return (
        <>
            <span class="thread-category">【{props.category}】</span>
            {props.threads.map((thread) =>
                <ThreadLink title={thread.title} href="#" />
            )}
        </>
    );
}

export default InCategoryThreadLinks;