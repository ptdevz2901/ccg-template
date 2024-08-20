import ReactPaginate from 'react-paginate'
import './index.css'
export const Pagination = () => {
    const handlePageClick = () => {
        console.log('cliked');

    }
    return <div><ReactPaginate
        breakLabel="..."
        className='pagination-custom'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={3}
        renderOnZeroPageCount={null}
        previousLabel={null}
        nextLabel={null}
    /></div>
}