import { FC, useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { IDarkModeProps } from "./DarkmodToggle.type";

const DarkmodToggle: FC<IDarkModeProps> = ({
    handleDrakMode
}) => {
  const [dark, setDark] = useState<boolean>(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
    handleDrakMode && handleDrakMode(dark);
  }, [dark]);

  const toggleDarkMode = () => {
    setDark(!dark);
  };

  return (
    <div className="w-7 h-7 flex justify-center items-center rounded-full bg-gray-700">
      <button
        className="text-yellow-500 dark:text-amber-500"
        onClick={toggleDarkMode}
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {dark ? <IoSunny /> : <IoMoon />}
      </button>
    </div>
  );
};

export default DarkmodToggle;
