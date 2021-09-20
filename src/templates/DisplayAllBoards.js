import React from "react";
import AllBoards from "../organisms/AllBoards";
import "../css/display_all_boards.css"

export default (props) => {
    return (
        <>
            <h1>{props.headerText}</h1>
            <div class="all-boards">
                <AllBoards boards={props.boards} />
            </div>
        </>
    );
}

