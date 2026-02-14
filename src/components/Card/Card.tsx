import { FC } from "react";
import { ICardProps } from "./Card.type";

const Card: FC<ICardProps> = ({ title, children, className,headerClassName }) => {
  return (
    <div
      className={`flex flex-col border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm ${className}`}
    >
      {title && (
        <div className={`bg-primary-50 px-4 py-3 border-b border-primary-700 ${headerClassName}`}>
          <h3 className="text-base font-medium">{title}</h3>
        </div>
      )}

      <div className="flex-1 overflow-y-auto bg-default">
        {children}
      </div>
    </div>
  );
};

export default Card;
