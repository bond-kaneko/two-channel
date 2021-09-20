import React from "react";
import BoardLink from "../atoms/BoardLink";

const InCategoryBoardLinks = (props) => {
    return (
        <>
            <span class="board-category">【{props.category}】</span>
            {props.boards.map((board) =>
                <BoardLink title={board.title} href={board.href} />
            )}
        </>
    );
}

export default InCategoryBoardLinks;