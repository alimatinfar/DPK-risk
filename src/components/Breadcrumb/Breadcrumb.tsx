import { FC } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { IBreadcrumbProps } from "./Breadcrumb.type";

const Breadcrumb: FC<IBreadcrumbProps> = ({
    Items
}) => {

  if (Items.length === 0) return null;

  return (
    <nav className="flex items-center text-xs mb-2 px-2 py-1 bg-primary-100 rounded-lg">
      <ol className="flex items-center gap-2">
        {
            Items.map((breadcrumItem, index) => (
                <li
                    key={breadcrumItem.title}
                    className="flex"
                    onClick={breadcrumItem.onClick}
                >
                    <span
                        className={
                            index === (Items.length - 1) ?
                            "font-medium" :
                            "transition-colors"
                        }
                    >
                        {breadcrumItem.title}
                    </span>
                    {
                        index !== (Items.length - 1) &&
                        <FiChevronLeft className="w-4 h-4" />
                    }
                </li>
            ))
        }
      </ol>
    </nav>
  );
};

export default Breadcrumb;
