import { FC } from "react";
import { IContentRootProps } from "./ContentRoot.type";

const ContentRoot: FC<IContentRootProps> = ({ title, children, className,headerBtns }) => {
  return (
    <div
      className={`flex flex-col border border-gray-200 dark:border-gray-700 rounded-lg h-[82vh] overflow-hidden shadow-sm ${className}`}
    >
      {title && (
        <div className="bg-primary px-4 py-3 border-b border-primary-700 flex justify-between">
          <div>
            <h3 className="text-base font-medium text-white">{title}</h3>
          </div>
          <div>
            {headerBtns}  
          </div>
        </div>
      )}

      <div className="flex-1 overflow-y-auto p-1 bg-white dark:bg-gray-900">
        {children}
      </div>
    </div>
  );
};

export default ContentRoot;
