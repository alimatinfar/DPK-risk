import ArrowPagination from "../../svg/ArrowPagination.tsx";
import React from "react";

const rowsPerPageValues = [
  10, 20, 50
]

export type PaginationProps = {
  totalLength: number;
  currentPage: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rowsPerPage: number) => void;
}

function Pagination(
  {
    totalLength, currentPage, rowsPerPage, onPageChange, onRowsPerPageChange,
  }: PaginationProps
) {
  const totalPages = Math.ceil(totalLength / rowsPerPage);

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newRowsPerPage = parseInt(e.target.value, 10);
    onRowsPerPageChange(newRowsPerPage);
  };

  const getPageRange = () => {
    const range: any = [];
    const maxPagesToShow = 5; // Adjust this value as needed

    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    // Add ellipsis if not all pages are displayed
    if (startPage > 1) {
      range.push(1);
      if (startPage > 2) range.push("...");
    }

    for (let i = startPage; i <= endPage; i++) {
      range.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) range.push("...");
      range.push(totalPages);
    }

    return range;
  };

  const pageRange = getPageRange();

  return (
    <div className="flex items-center justify-between my-4 px-4">
      <div className="flex justify-center items-center">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="rotate-180 border w-10 h-10 border-gray-300 hover:bg-gray-100 duration-200 flex justify-center items-center rounded-l-lg p-2"
        >
          <ArrowPagination disabled={currentPage === 1}/>
        </button>
        {pageRange.map((page: any, index: number) => {
            const isThreeDots = page === "..."
            const isLast = (index + 1) === pageRange.length

            return (
              <React.Fragment key={index}>
                <button
                  onClick={() => !isThreeDots && handlePageChange(page)}
                  className={`border-y
                   ${isLast ? '' : 'border-l'}
                   w-10 h-10 border-gray-300 hover:bg-gray-100 duration-200 ${
                    currentPage === page
                      ? "bg-gray-100"
                      : ""
                  } ${isThreeDots ? 'cursor-default' : ''}`}
                >
                  {isThreeDots ? '...' : page}
                </button>
              </React.Fragment>
            )
          }
        )}
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="border w-10 h-10 border-gray-300 hover:bg-gray-100 duration-200 flex justify-center items-center rounded-l-lg p-2"
        >
          <ArrowPagination disabled={currentPage === totalPages}/>
        </button>
      </div>

      <div>
        <span className="ml-6 text-gray-500">
          تعداد نمایش در صفحه
        </span>

        <select
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          className="border border-gray-300 outline-0 rounded px-2 py-1 h-[36px]"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
}

export default Pagination
