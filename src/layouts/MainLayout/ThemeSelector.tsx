import SystemIcon from "../../components/svg/theme/SystemIcon.tsx";
import {THEME_VALUES, useThemeStore} from "../../components/others/ThemeManager/store/useThemeStore.ts";
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

  const setTheme = useThemeStore(state => state.setTheme)
  const theme = useThemeStore(state => state.theme)

  return (
    <div
       className='bg-slate-100 dark:bg-dark-2 rounded-lg p-1 grid grid-cols-3 gap-1'
    >
      {themes.map(item => {

        const isActive = theme === item.name

        return (
          <div
            key={item.name}
            onClick={() => setTheme(item.name)}
            className={`
              p-1 hover:bg-slate-200 dark:hover:bg-dark-4 cursor-pointer rounded-md duration-200
              ${isActive ? 'dark:bg-dark-4' : ''}
            `}
          >
            <item.icon textColor={isActive ? 'text-primary dark:text-white' : ''} />
          </div>
        )
      })}
    </div>
  );
}

export default ThemeSelector;
