
export type TableEmptyStateProps = {
  columnLength: number,
}

function TableEmptyState({columnLength}: TableEmptyStateProps) {
  return (
    <tfoot className="  text-gray-900 font-normal ">
      <tr className="">
        <td
          colSpan={columnLength}
          className="text-center py-20 text-base"
        >
          موردی یافت نشد
        </td>
      </tr>
    </tfoot>
  )
}

export default TableEmptyState