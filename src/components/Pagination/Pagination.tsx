import React from 'react'
import classes from "./Pagination.module.css"




const Pagination: React.FC<PropsType> = React.memo(({currentPage, itemsOnPage, totalItems, changePageNumber}) => {


    let pagesCount = Math.ceil(totalItems / itemsOnPage)
    let firstPage = currentPage - 2
    let lastPage = currentPage + 2
    let pages = []


    if (firstPage <= 0) firstPage = 1
    if (lastPage >= pagesCount) lastPage = pagesCount


    for (let i = firstPage; i <= lastPage; i++) {
        pages.push(i)
    }


    const clickPrevButton = () => {
        if (currentPage>1)  changePageNumber(currentPage - 1)
    }


    const clickNextButton = () => {
        if (currentPage<pagesCount)  changePageNumber(currentPage + 1)
    }


    return (
        <div className={classes.pagination}>
            <button className={classes.pagination__btn}
                    disabled={currentPage===1}
                    onClick={clickPrevButton}
            >
                «
            </button>

            <div className={classes.pagination__pages}>
                {currentPage > 3 && <>
                    <button className={`${classes.pagination__btn} ${1 === currentPage ? classes.pagination__btn_active : ""}`}
                            onClick={() => changePageNumber(1)}>{1}</button>
                    <div className={classes.pagination__space}>...</div>
                </>
                }
                {pages.map(pageN => <button key={pageN}
                                            className={`${classes.pagination__btn} ${pageN === currentPage ? classes.pagination__btn_active : ""}`}
                                            onClick={() => changePageNumber(pageN)}>{pageN}</button>)}
                {currentPage < pagesCount - 4 && <>
                    <div className={classes.pagination__space}>...</div>
                    <button className={`${classes.pagination__btn} ${pagesCount === currentPage ? classes.pagination__btn_active : ""}`}
                            onClick={() => changePageNumber(pagesCount)}>{pagesCount}</button>
                </>}
            </div>

            <button className={classes.pagination__btn}
                    disabled={currentPage===pagesCount}
                    onClick={clickNextButton}
            >
                »
            </button>
        </div>
    )
})


export default Pagination


//Types


type PropsType = {
    totalItems: number
    itemsOnPage: number
    currentPage: number
    changePageNumber: (page: number) => void
}
