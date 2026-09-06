import React from "react";
import getIconPathClassName from "../../utils/getIconPathClassName.ts";

type Props = {
  disabled: boolean;
};

const ArrowPagination = (props: Props) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className={getIconPathClassName({mode: 'stroke', textColor: props.disabled ? 'text-gray-300' : 'text-gray-900'})}
        d="M7.11095 12.6668L2.6665 8.00016M2.6665 8.00016L7.11095 3.3335M2.6665 8.00016L13.3332 8.00016"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowPagination;
