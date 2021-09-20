import React from "react";
import InCategoryBoardLinks from "../molecules/InCategoryBoardLinks";

export default (props) => {
    const boardsByCategory = boardsGroupingByCategory(appendBoardHref(props.boards))

    return (
        <>
            {Object.keys(boardsByCategory).map((category) =>
                <InCategoryBoardLinks category={category} boards={boardsByCategory[category]} />
            )}
        </>
    );
}

const appendBoardHref = (boards) => {
    boards.map((board) => board["href"] = "/board/detail/" + board.id)

    return boards
}

const boardsGroupingByCategory = (boards) => {
    const boardsByCategory = {}
    boards.forEach((board) => {
        if (boardsByCategory[board.category] == undefined) {
            boardsByCategory[board.category] = []
        }

        boardsByCategory[board.category].push(board)
    })

    return boardsByCategory
}