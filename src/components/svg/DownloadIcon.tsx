import type {IconPropsType} from "./IconPropsType.ts";

function DownloadIcon({className, textColor}: IconPropsType) {
  return (
    <svg
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
      {...className && {className}}
    >
      <path
        className={`stroke-current duration-200 ${textColor || 'text-primary'}`}
        d="M6.67952 13.1534H4.34508C2.86574 13.1534 1.6665 12.132 1.6665 10.6345C1.6665 9.137 2.86574 7.92301 4.34508 7.92301C4.44567 7.92301 4.54498 7.92863 4.64269 7.93957V7.92301H4.67954C4.65522 7.72562 4.64269 7.52452 4.64269 7.32046C4.64269 4.65819 6.77467 2.5 9.4046 2.5C11.1855 2.5 12.7381 3.48966 13.5549 4.95535C13.7545 4.92562 13.9587 4.91023 14.1665 4.91023C16.4677 4.91023 18.3332 6.79865 18.3332 9.12813C18.3332 11.253 16.781 12.8183 14.7617 13.1107H12.604M9.70222 8.22429V17.5M11.7576 15.4173L9.70222 17.5L7.59098 15.4173"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

export default DownloadIcon;
