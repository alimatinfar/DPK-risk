import type { IconPropsType } from "../IconPropsType.ts";

function WithdrawalIcon({ textColor, className }: IconPropsType) {
  return (
    <svg {...(className && { className })} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className={`stroke-current duration-200 ${textColor || "text-gray-500"}`}
        d="M13.3327 15.0001L14.9993 16.6667L18.3327 13.3334M18.3327 8.33341H1.66602M18.3327 10.0001V6.83342C18.3327 5.9 18.3327 5.43328 18.151 5.07677C17.9912 4.76316 17.7363 4.50819 17.4227 4.34841C17.0661 4.16675 16.5994 4.16675 15.666 4.16675H4.33268C3.39926 4.16675 2.93255 4.16675 2.57603 4.3484C2.26243 4.50819 2.00746 4.76316 1.84767 5.07676C1.66602 5.43328 1.66602 5.89999 1.66602 6.83341V13.1667C1.66602 14.1002 1.66602 14.5669 1.84767 14.9234C2.00746 15.237 2.26243 15.492 2.57603 15.6518C2.93255 15.8334 3.39926 15.8334 4.33268 15.8334H9.99935"
        stroke="#6B7280"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default WithdrawalIcon;
