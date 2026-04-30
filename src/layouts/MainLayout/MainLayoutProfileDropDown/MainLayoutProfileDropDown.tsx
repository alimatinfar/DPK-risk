import MainLayoutProfileDropDownLink from "./MainLayoutProfileDropDownLink.tsx";
import {Link} from "react-router";
import useMainLayoutProfileDropDown from "./hooks/useMainLayoutProfileDropDown.tsx";


export type ProfileDropDownProps = {
  closeDropDown: () => void;
  openLogoutModalHandler: () => void;
};

function MainLayoutProfileDropDown({closeDropDown, openLogoutModalHandler}: ProfileDropDownProps) {

  const {
    dropDownItems
  } = useMainLayoutProfileDropDown({
    openLogoutModalHandler
  })

  return (
    <div className="flex flex-col bg-white border border-gray-300 rounded-lg py-2 px-1 space-y-1 min-w-64">
      <MainLayoutProfileDropDownLink/>

      {dropDownItems.map((item, index) => {
        function onClickHandler(e: any) {
          if (item.onClick) {
            e.preventDefault();
            item.onClick();
          }

          closeDropDown();
        }

        const isLast = index === dropDownItems.length - 1;

        return (
          <div key={index} className='flex flex-col space-y-1'>
            {isLast && <div className="w-full h-px bg-gray-300"></div>}
            <Link
              to={item.link || "#"}
              onClick={(e) => {
                onClickHandler(e);
                console.log({item});
              }}
            >
              <button
                className={`
                  flex items-center gap-x-2 p-2 text-gray-900 duration-200 cursor-pointer
                  hover:bg-gray-50 whitespace-nowrap min-w-42.5 select-none w-full rounded-md
                `}
              >
                <span className="overflow-hidden">{item.icon}</span>
                <span>{item.name}</span>
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default MainLayoutProfileDropDown;
