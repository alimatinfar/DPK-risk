import SystemIcon from "../../components/svg/theme/SystemIcon.tsx";
import {THEME_VALUES} from "../../components/others/ThemeManager/store/useThemeStore.ts";
import DarkIcon from "../../components/svg/theme/DarkIcon.tsx";
import LightIcon from "../../components/svg/theme/LightIcon.tsx";

const themes = [
  {
    name: THEME_VALUES.SYSTEM,
    icon: SystemIcon
  },
  {
    name: THEME_VALUES.DARK,
    icon: DarkIcon
  },
  {
    name: THEME_VALUES.LIGHT,
    icon: LightIcon
  },
]

function ThemeSelector() {
  return (
    <div
       className='bg-slate-100 rounded-lg p-1 grid grid-cols-3 gap-1'
    >
      {themes.map(item => (
        <div
          key={item.name}
          className='p-1 hover:bg-slate-200 cursor-pointer rounded-md'
        >
          <item.icon />
        </div>
      ))}
    </div>
  );
}

export default ThemeSelector;
