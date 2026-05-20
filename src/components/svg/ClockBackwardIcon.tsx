import type { IconPropsType } from "./IconPropsType.ts";

function ClockBackwardIcon({ textColor, className, height, width }: IconPropsType) {
    return (
        <svg
            width={width || "20"}
            height={height || "20"}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...className && { className }}
        >
            <path
                className={`stroke-current duration-200 ${textColor}`}
                d="M16.2539 10C16.2539 14.1421 12.8952 17.5 8.75195 17.5C4.60874 17.5 1.25 14.1421 1.25 10C1.25 5.85786 4.60874 2.5 8.75195 2.5C11.5287 2.5 13.9531 4.00824 15.2503 6.25M14.1959 10.823L16.0714 8.94805L17.9469 10.823M11.5625 12.0451L8.75 11.1076V7.1875"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default ClockBackwardIcon