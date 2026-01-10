import ReactPaginate from 'react-paginate';
import './Pagination.css'

function PaginatedItems({ totalPages, currentPage, setSearchParams }) {
  const handlePageClick = (event) => {
    setSearchParams({
      page: event.selected + 1
    })
  }

  return (
    <>
      <div>
        <ReactPaginate
            pageCount={totalPages}
            forcePage={currentPage}
            onPageChange={handlePageClick}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            renderOnZeroPageCount={null}
            pageRangeDisplayed={2}
            marginPagesDisplayed={4}

            containerClassName="pagination"
            activeClassName="active"
            breakClassName="item"
            breakLinkClassName="link"
            pageClassName="item"
            pageLinkClassName="link"
            previousClassName="prevItem"
            previousLinkClassName="link"
            nextClassName="nextItem"
            nextLinkClassName="link"
        />
      </div>
    </>
  );
}

export default PaginatedItems