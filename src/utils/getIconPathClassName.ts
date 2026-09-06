

const MODE_KEYS = {
  'stroke': 'stroke-current',
  'fill': 'fill-current',
} as const

type Props = {
  textColor: string;
  mode?: keyof typeof MODE_KEYS;
}

function getIconPathClassName(
  {textColor, mode = 'fill'}: Props
) {
  return `${MODE_KEYS[mode]} duration-200 ${textColor}`
}

export default getIconPathClassName
