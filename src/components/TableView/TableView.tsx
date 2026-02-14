import { FC } from "react";
import { ITableViewProps } from "./TableView.type";

const TableView: FC<ITableViewProps> = ({ title, items }) => {
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg border border-gray-200 dark:border-gray-700">
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th
              scope="col"
              className="px-2 py-4 font-thin text-secondary text-center  bg-primary-1"
              colSpan={2}
            >
              {title}
            </th>
          </tr>
        </thead>
        <tbody className="">
          {items.map((item, index) => (
            <tr
              key={index}
              className={`
              ${index % 2 == 0 ? "bg-secondary-3" : "bg-secondary-4"}
                text-center text-primary`}
            >
              <td scope="row" className="px-2 py-4">
                <div className="flex items-center justify-center">
                  <span className="ml-2">{item.label}</span>
                </div>
              </td>
              <td className="px-2 py-4">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
