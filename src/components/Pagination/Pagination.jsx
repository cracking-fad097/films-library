import ReactPaginate from 'react-paginate';

function PaginatedItems({ totalPages, currentPage }) {
  const handlePageClick = () => {

  }

  return (
    <>
      <div>
        <ReactPaginate
            pageCount={totalPages}
            forcePage={currentPage}
            onPageChange={handlePageClick}
            breakLabel="..."
            nextLabel="next >"
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            pageRangeDisplayed={2}
            marginPagesDisplayed={4}
            containerClassName="pagination"
            activeClassName="active"
            breakClassName="item"
            breakLinkClassName="link"
            pageClassName="item"
            pageLinkClassName="link"
            previousClassName="item"
            previousLinkClassName="link"
            nextClassName="item"
            nextLinkClassName="link"
        />
      </div>
    </>
  );
}

export default PaginatedItems