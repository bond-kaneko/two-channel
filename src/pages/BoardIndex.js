import React from "react"
import DisplayAllThreads from "../templates/DisplayAllThreads";

const BoardIndex = () => {
    // TODO スレ一覧の取得
    const threads = [];
    for (let i = 1; i <= 1000; i++) {
        threads.push({ id: i, title: "スレ" + i, category: "カテゴリ" + (i % 5) })
    }

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