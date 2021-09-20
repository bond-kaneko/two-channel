import React from "react"
import ThreadLink from "../atoms/ThreadLink";

const BoardIndex = () => {
    // TODO スレ一覧の取得
    const threads = [
        { id: 1, title: "スレ1" },
        { id: 2, title: "スレ2" }
    ];

    return (
        <>
            <h1>掲示板一覧</h1>
            {threads.map((thread) =>
                <ThreadLink title={thread.title} href="#" />
            )}
        </>
    );
}

export default BoardIndex;