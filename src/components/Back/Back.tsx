import { FC } from "react";
import { Link } from "react-router";
import { IBackProps } from "./Back.type";

const Back: FC<IBackProps> = ({
    title = "بازگشت",
    backUrl,
    classNames
}) => {
  return (
    <Link
      to={backUrl ? backUrl : "/"}
      className={`bg-primary text-white dark:text-block hover:bg-primary-700 px-3 mx-2 py-1.5 text-sm border-2 border-primary  rounded-md font-medium
        transition-all duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2
        dark:focus:ring-offset-primary-300 ${classNames}`}
    >
      {title}
    </Link>
  );
};

export default Back;
