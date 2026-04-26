import type {IconPropsType} from "./IconPropsType.ts";

function SearchIcon({textColor, className}: IconPropsType) {
  return (
    <svg
      {...className && {className}}
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className={`stroke-current ${textColor || 'text-slate-500'}`}
        d="M14.1057 14.2L17 17M9.5 6C11.1569 6 12.5 7.34315 12.5 9M16.0667 9.53333C16.0667 13.1416 13.1416 16.0667 9.53333 16.0667C5.92507 16.0667 3 13.1416 3 9.53333C3 5.92507 5.92507 3 9.53333 3C13.1416 3 16.0667 5.92507 16.0667 9.53333Z"
        strokeWidth="2" strokeLinecap="round"
      />
    </svg>
  );
}

export default SearchIcon;