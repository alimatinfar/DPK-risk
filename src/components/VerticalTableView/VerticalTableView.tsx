import { FC } from "react";
import { IVerticalTableViewProps } from "./VerticalTableView.type";

const VerticalTableView: FC<IVerticalTableViewProps> = ({
  title,
  items,
  columns = 2,
}) => {
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg border border-gray-200 dark:border-gray-700">
      <table className="w-full text-sm text-right rtl:text-right font-iransans">
        <thead className="text-sm bg-primary-1 text-center">
          <tr className={"text-secondary"}>
            <th scope="col" className="px-6 py-4 " colSpan={columns * 2}>
              <div className="flex font-thin items-center justify-center">
                <span>{title}</span>
              </div>
            </th>
          </tr>

          <tr className="bg-secondary-3 font-thin text-primary">
            {items.map((item, index) => (
              <th
                key={`label-${index}`}
                scope="col"
                className="px-6 font-thin py-3"
              >
                {item.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr className="bg-secondary-4 font-thin text-primary text-center">
            {items.map((item, index) => (
              <td key={`value-${index}`} className="px-6 py-4">
                <span>{item.value || "---"}</span>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VerticalTableView;
