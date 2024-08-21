import ReactPaginate from 'react-paginate'
import './index.css'


export const Pagination = ({ pageCount = 1 }) => {
    const handlePageClick = () => {
        console.log('cliked');

    }
    return <div><ReactPaginate
        breakLabel="..."
        className='pagination-custom'
        onPageChange={handlePageClick}
        pageRangeDisplayed={6}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        previousLabel={null}
        nextLabel={null}
    /></div>
}