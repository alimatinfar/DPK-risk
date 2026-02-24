import { FC, useState } from "react";
import { ITabsProps } from "./Tabs.type";

const Tabs: FC<ITabsProps> = ({
  tabs = [],
  defaultActiveTab = "",
  className = "",
  children,
  buttons,
  isLoading = false,
  isError = false,
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  return (
    <div className={`flex flex-col border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm relative ${className}`}>
      <div className="bg-primary-100 border-b border-gray-200 dark:border-gray-700 relative z-20">
        <div className="flex justify-between items-center relative">
          {isLoading && (
            <div className="absolute top-0 left-0 right-0 h-0.5 overflow-hidden">
              <div
                className="absolute top-0 w-1/3 h-full bg-primary-2 duration-500"
                style={{
                  animation: "moveRightToLeft 5s linear infinite",
                }}
              ></div>
            </div>
          )}
          <div>
            {tabs.map((tab) => (
              <div key={tab.id} className="group relative inline-block">
                <button
                  className={`px-4 py-3  text-sm font-medium transition-colors duration-200 ${
                    activeTab === tab.id ? "border-b-2 border-primary text-primary" : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                  disabled={isLoading}
                >
                  {tab.label}
                </button>

                {tab.title && (
                  <div className="absolute text-center invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 z-10 w-48 p-2 mt-2 text-sm  rounded-lg shadow-lg left-1/2 transform -translate-x-1/2">
                    {tab.title}
                    <div className="absolute w-3 h-3 -top-1 left-1/2 transform -translate-x-1/2 rotate-45 bg-secondary-1"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div>{buttons}</div>
        </div>
      </div>

      <div className="flex-1 flex flex-col relative z-20">
        <div className="overflow-y-auto bg-white dark:bg-gray-900">
          {children}
          {tabs.find((tab) => tab.id === activeTab)?.content}

          {isLoading && (
            <div className="absolute inset-0 bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-primary-2 border-t-transparent rounded-full animate-spin mb-2"></div>
                <span className=" text-sm text-primary">در حال بارگذاری ... </span>
              </div>
            </div>
          )}

          {isError && !isLoading && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg m-4">
              <div className="flex items-center text-red-600 dark:text-red-400">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                خطا در بارگذاری داده‌ها
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
