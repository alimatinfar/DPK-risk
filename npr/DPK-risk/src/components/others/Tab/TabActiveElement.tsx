
type Props = {
  style?: any
}

function TabActiveElement({style}: Props) {
  return (
    <div
      style={style}
      className={`absolute bottom-1 bg-white shadow-sm rounded h-[calc(100%-8px)] transition-all duration-300`}
    />
  )
}

export default TabActiveElement