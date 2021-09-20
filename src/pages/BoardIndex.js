import React from "react"
import DisplayAllThreads from "../templates/DisplayAllThreads";

const BoardIndex = () => {
    // TODO スレ一覧の取得
    const threads = [
        { id: 1, title: "スレ1", category: "雑談" },
        { id: 2, title: "スレ2", category: "雑談" },
        { id: 3, title: "スレ3", category: "生活" },
        { id: 4, title: "スレ4", category: "生活" },
        { id: 5, title: "スレ5", category: "ゲーム" },
        { id: 6, title: "スレ6", category: "ゲーム" }
    ];

    const threadsByCategory = threadsGroupingByCategory(threads)

    return (
        <>
            <DisplayAllThreads headerText="掲示板一覧" threadsByCategory={threadsByCategory} />
        </>
    );
}

const threadsGroupingByCategory = (threads) => {
    const threadsByCategory = {}
    threads.forEach((thread) => {
        if (threadsByCategory[thread.category] == undefined) {
            threadsByCategory[thread.category] = []
        }

        threadsByCategory[thread.category].push(thread)
    })

    return threadsByCategory
}

export default BoardIndex;