import DropDownActions, {
  type DropDownActionsProps
} from "../../../components/others/DropDown/DropDownActions/DropDownActions.tsx";
import ArrowIcon from "../../../components/svg/ArrowIcon.tsx";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "./SearchPageForm.constances.ts";
import type {SearchPageFormPersonType} from "./SearchPageForm.types.ts";
import {useMemo, useState} from "react";
import type {SetStateType} from "../../../types/SetStateType.ts";


type Props = {
  activePersonType: SearchPageFormPersonType | undefined;
  setActivePersonType: SetStateType<SearchPageFormPersonType | undefined>;
}

function SearchPageFormSelectPerson(
  {activePersonType, setActivePersonType}: Props
) {

  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false)

  const actions: DropDownActionsProps['actions'] = useMemo(function () {
    return Object.entries(SEARCH_PAGE_FORM_PERSON_TYPE_KEYS).map(([_, value]) => ({
      onClick: () => setActivePersonType(value?.name),
      title: value?.label,
      icon: <value.icon />,
      className: activePersonType === value?.name ? 'bg-gray-100' : ''
    }))
  }, [setActivePersonType, activePersonType])

  const activePersonLabel = useMemo(function () {
    return Object.values(SEARCH_PAGE_FORM_PERSON_TYPE_KEYS).find(item => item.name === activePersonType)?.label
  }, [activePersonType])

  return (
    <DropDownActions
      actions={actions} dropDownOpen={dropDownOpen} setDropDownOpen={setDropDownOpen}
    >
      <div className='flex items-center gap-x-2 text-primary cursor-pointer'>
        <span className='font-medium'>
          {`فیلترهای پیشرفته ${activePersonLabel ? `(${activePersonLabel})` : ''}`}
        </span>
        <ArrowIcon textColor='text-inherit' />
      </div>
    </DropDownActions>
  );
}

export default SearchPageFormSelectPerson;