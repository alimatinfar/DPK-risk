import EmptyState from "../../RenderLogic/EmptyState.tsx";

export type TableEmptyStateProps = {
  columnLength: number,
}

function TableEmptyState({columnLength}: TableEmptyStateProps) {
  return (
    <tfoot className="  text-slate-900 font-normal ">
      <tr className="">
        <td
          colSpan={columnLength}
          className="text-center py-4 text-base"
        >
          <EmptyState title='موردی یافت نشد' />
        </td>
      </tr>
    </tfoot>
  )
}

export default TableEmptyState
