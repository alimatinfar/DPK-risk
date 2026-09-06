import {useEffect, useMemo, useState} from "react";


export const DEFAULT_ROWS_PER_PAGE = 10
export const DEFAULT_CURRENT_PAGE = 1

type Props = {
  data: any[];
  customRowsPerPage?: number;
}

function usePaginatedData(
  {data, customRowsPerPage}: Props
) {

  const [rowsPerPage, setRowsPerPage] = useState<number>(customRowsPerPage || DEFAULT_ROWS_PER_PAGE)
  const [currentPage, setCurrentPage] = useState<number>(DEFAULT_CURRENT_PAGE)

  useEffect(() => {
    setCurrentPage(DEFAULT_CURRENT_PAGE)
  }, [data]);

  const paginatedData = useMemo(() => {
    return [...data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)];
  }, [data, currentPage, rowsPerPage])

  return {
    paginatedData, currentPage, setCurrentPage, rowsPerPage, setRowsPerPage
  }
}

export default usePaginatedData
