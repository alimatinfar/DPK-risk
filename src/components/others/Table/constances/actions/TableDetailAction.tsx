import DetailIcon from "../../../../svg/DetailIcon.tsx";
import type {TdActionType} from "../../TableBody/TdActions/TdActions.tsx";

export const TableDetailAction = (onClick: TdActionType['onClick']) => ({
  onClick,
  icon: <DetailIcon width='100%' height='100%'/>,
  title: 'جزئیات',
})
