import ReactPaginate from "react-paginate";

function Paginate({ totalPages, onPageChange }) {
  const handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    onPageChange(selectedPage);
  };
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={totalPages}
      previousLabel="<"
      renderOnZeroPageCount={null}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination justify-content-center"
      activeClassName="active"
    />
  );
}

export default Paginate;