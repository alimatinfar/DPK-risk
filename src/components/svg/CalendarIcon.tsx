import type { IconPropsType } from "./IconPropsType.ts";

function CalendarIcon({textColor, className, height, width}: IconPropsType) {
    return (
        <svg
            width={width || "14"}
            height={height || "16"}
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...className && {className}}
        >
            <path
                className={`stroke-current duration-200 ${textColor}`}
                d="M3.23247 4.71085H10.8215M2.89037 0.500075V1.87377M10.8589 1.87362C12.1791 1.87362 13.2495 2.96236 13.2496 4.30542L13.2499 12.4117C13.25 13.7549 12.1797 14.8438 10.8594 14.8438H2.89086C1.57063 14.8438 0.500361 13.755 0.5003 12.412L0.49993 4.30565C0.499869 2.9625 1.57006 1.87377 2.89037 1.87377L10.8589 1.87362ZM10.8589 0.5V1.87362M5.28152 12.0065V7.14271L3.68782 8.35866M9.66421 12.0065V7.14271L8.0705 8.35866"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>

    )
}

export default CalendarIcon