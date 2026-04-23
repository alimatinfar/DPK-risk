import Skeleton from "../../Skeleton/Skeleton";


type Props = {
  columnsLength: number;
  rowLength: number;
  hasActionsColumn: boolean;
}

function TableLoading({columnsLength, rowLength, hasActionsColumn}: Props) {
  return (
    <tbody>
      {new Array(rowLength).fill('').map((_, rowIndex) => {

        const rowIsLast = rowIndex + 1 === rowLength;
        const borderClassName = rowIsLast ? '' : 'border-b border-gray-300'

        return (
          <tr className={borderClassName}>
            {new Array(columnsLength).fill('').map((_, index) => {

              const isLast = (index + 1) === columnsLength;
              const isPenultimate = (index + 2) === columnsLength;
              const defaultPadding = 'p-1.5'
              const paddingClassName = hasActionsColumn ? isLast ? 'py-1.5 pl-1.5 pr-0' : isPenultimate ? 'py-1.5 pr-1.5 pl-0' :
                defaultPadding : defaultPadding

              const skeletonClassName = hasActionsColumn ? isLast ? 'rounded-r-none' : isPenultimate ? 'rounded-l-none' :
                '' : ''

              return (
                <td className={`h-12 ${paddingClassName}`}>
                  <Skeleton size={`h-full w-full rounded-md ${skeletonClassName}`} />
                </td>
              )
            })}
          </tr>
        )
      })}
    </tbody>
  )
}

export default TableLoading