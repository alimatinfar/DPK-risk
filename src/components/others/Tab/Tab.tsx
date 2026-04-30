import React, {useRef, useState} from "react";
import TabOption from "./TabOption";
import TabActiveElement from "./TabActiveElement";


type ItemIdType = number | string
export type TabType = { id: ItemIdType, title: string }

export type TabsProps = {
  tabs: TabType[],
  activeTab: TabType['id'];
  onChange: (itemId:any) => void;
  mobileMode?: boolean;
}

function Tab({ tabs, activeTab, onChange, mobileMode }: TabsProps) {

  const [activeSpanStyle, setActiveSpanStyle] = useState({ width: 0, right: 0 })

  const filtersRef = useRef(null)

  function onClickHandler(itemId: ItemIdType) {
    onChange(itemId)
  }

  function onChangeActiveSpanHandler(width: number, right: number) {
    setActiveSpanStyle({ width, right })
  }

  // useDetectResizingAtFirstPainting({element: filterRef2?.current, callback: () => console.log('wrapper'), index: 10})

  return (
    <div className={`flex ${mobileMode ? 'w-full' : ''}`}>
      <div className={`bg-gray-100 p-1 border border-gray-300 rounded-lg relative ${mobileMode ? 'w-full' : ''}`}>
        <div
          className={`
        flex items-end hide-scroll overflow-x-scroll overflow-y-hidden
      `}
          ref={filtersRef}
        >
          {tabs.map((item, index) => (
            <TabOption
              onChangeActiveSpan={onChangeActiveSpanHandler}
              key={item.id}
              // largerThanMd={largerThanMd}
              index={index}
              isActive={item.id === activeTab}
              onClick={() => onClickHandler(item.id)}
              title={item.title}
              className={`
                ${((index + 1) !== tabs.length && !mobileMode) ? 'ml-2' : ''}
                ${mobileMode ? 'grow' : ''}
              `}
            />
          ))}

          <TabActiveElement style={{width: `${activeSpanStyle.width}px`, right: `${activeSpanStyle.right}px`}}/>
        </div>
      </div>
    </div>
  );
}

export default Tab;