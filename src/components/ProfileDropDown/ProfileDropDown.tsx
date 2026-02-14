import { FC, useEffect, useRef, useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { Link } from "react-router";
import { helper } from "../../utils/helper";
import { INavigationItem, IUserInfo } from "./ProfileDropDown.type";

const ProfileDropDown: FC = () => {
  const [state, setState] = useState(false);
  const [user, setUser] = useState<IUserInfo>({
    userDisplayName: "",
    userPost: "",
    userType: "",
  });

  const profileRef = useRef<HTMLDivElement>(null);

  const handleDropDown = (e: MouseEvent) => {
    if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
      setState(false);
    }
  };
const handleOutClick=()=>{helper.clientRemove('appToken')}
  useEffect(() => {
    const storedUser = helper.getUser();
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser(parsed.userInfo || user);
    }

    document.addEventListener("click", handleDropDown);

    return () => {
      document.removeEventListener("click", handleDropDown);
    };
  }, []);

  const navigation: INavigationItem[] = [
    { title: user.userDisplayName, path: undefined },
    { title: user.userPost, path: undefined },
  ];

  return (
    <div className="relative">
      <div
        ref={profileRef}
        onClick={() => setState(!state)}
        className="flex items-center cursor-pointer gap-2"
      >
        <span className="text-sm">{user.userType}</span>

        <button className="w-10 h-10 outline-none bg-transparent rounded-full ring-offset-2 ring-gray-200 ring-2">
          <FaUserLarge className="w-10 text-2xl" />
        </button>
      </div>

      <ul
        className={`rounded-md shadow-lg bg-primary-50 overflow-hidden border border-gray-200 mt-5 left-0 text-center space-y-5 absolute lg:rounded-md text-sm lg:w-52 lg:space-y-0 ${
          state ? "block" : "hidden"
        }`}
      >
        {navigation.map((item, index) => (
          <li key={index}>
            {item.path ? (
              <Link
                to={item.path}
                className="block px-3 py-2 cursor-pointer hover:bg-[#d3d3d3]  p-2.5"
                onClick={() => setState(false)}
              >
                {item.title}
              </Link>
            ) : (
              <span className="block px-3 py-2">
                {item.title}
              </span>
            )}
          </li>
        ))}
        <li>
           <Link
                to={'/login'}
                className="block px-3 py-2 cursor-pointer hover:bg-[#d3d3d3]  p-2.5"
                onClick={handleOutClick}
              >
                {'خروج'}
              </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropDown;
