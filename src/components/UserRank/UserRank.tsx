import { FC } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router";
import { IUserRankProps } from "./UserRank.type";

const UserRank: FC<IUserRankProps> = ({ url = "", rank = 0, title = "" }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <FaUserCircle className="text-gray-400 text-[8rem]" />
      <Link
        className="flex flex-col justify-center items-center text-primary gap-1 mt-4 "
        to={url}
      >
        <span>{title}</span>
        <strong className="flex justify-center items-center rounded-full text-secondary w-12 h-12 bg-green-700">
          {rank}
        </strong>
      </Link>
    </div>
  );
};

export default UserRank;
