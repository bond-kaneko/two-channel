import React from "react";
import InCategoryThreadLinks from "../molecules/InCategoryThreadLinks";

const AllThreads = (props) => {
    return (
        <>
            {Object.keys(props.threadsByCategory).map((category) =>
                <InCategoryThreadLinks category={category} threads={props.threadsByCategory[category]} />
            )}
        </>
    );
}

export default AllThreads;