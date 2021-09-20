import React from "react"
import DisplayAllBoards from "../templates/DisplayAllBoards";

const BoardIndex = () => {
    // TODO 掲示板一覧の取得
    const boards = [];
    for (let i = 1; i <= 1000; i++) {
        boards.push({ id: i, title: "掲示板" + i, category: "カテゴリ" + (i % 5) })
    }

    return (
        <>
            <DisplayAllBoards headerText="掲示板一覧" boards={boards} />
        </>
    );
}



export default BoardIndex;