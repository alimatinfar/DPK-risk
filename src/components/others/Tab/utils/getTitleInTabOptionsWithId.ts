import type {TabType} from "../Tab.tsx";


type Props = {
  options: TabType[];
  id: TabType['id'];
}

function getTitleInTabOptionsWithId({options, id}: Props): TabType['title'] {
  return options.find(option => option.id === id)?.title || ''
}

export default getTitleInTabOptionsWithId;