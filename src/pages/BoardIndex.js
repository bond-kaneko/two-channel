import React from "react"
import InCategoryThreadLinks from "../molecules/InCategoryThreadLinks";

const BoardIndex = () => {
    // TODO スレ一覧の取得
    const threads = [
        { id: 1, title: "スレ1" },
        { id: 2, title: "スレ2" }
    ];

    return (
        <>
            <h1>掲示板一覧</h1>
            <InCategoryThreadLinks category="雑談" threads={threads} />
            <InCategoryThreadLinks category="文化" threads={threads} />
        </>
    );
}

export default BoardIndex;