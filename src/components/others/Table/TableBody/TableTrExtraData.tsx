

export type TableTrExtraDataItemType = {
  title: string;
  value: string;
}

export type TableTrExtraDataProps = {
  items: TableTrExtraDataItemType[];
  columnLength: number;
  isLast: boolean;
}

function TableTrExtraData({items, columnLength, isLast}: TableTrExtraDataProps) {
  return (
    <div className={`p-4 bg-gray-50 ${isLast ? 'border-t' : 'border-b'} border-gray-300`}>
      <div className='flex items-center border-r border-gray-300 pr-2.5 space-x-10'>
        <div className='flex flex-col space-y-6 text-gray-700'>
          {items.map(item => (
            <span className=''>
              {item.title}
            </span>
          ))}
        </div>

        <div className='flex flex-col space-y-6 text-gray-900'>
          {items.map(item => (
            <span className=''>
              {item.value}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TableTrExtraData