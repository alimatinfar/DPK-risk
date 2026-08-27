import type {HighRiskIndividualsTimeLineProps} from "../../HighRiskIndividualsTimeLine/HighRiskIndividualsTimeLine.tsx";
import moment from "moment-jalaali";
import RemoveUserIcon from "../../../../../../../components/svg/RemoveUserIcon.tsx";
import AddUserIcon from "../../../../../../../components/svg/AddUserIcon.tsx";

function useAdminHighRiskIndividualsLettersDetailDocumentsTimeLine() {

  const timeLineHistories: HighRiskIndividualsTimeLineProps['histories'] = [
    {
      title: 'افزودن ۳۵ نفر',
      subTitle: 'ایجاد لیست',
      date: moment(),
      isGreen: true,
    },
    {
      title: 'حذف یک شخص',
      subTitle: '1234567890',
      subTitleIcon: RemoveUserIcon,
      date: moment(),
      isGreen: false,
    },
    {
      title: 'افزودن یک شخص',
      subTitle: '1234567890',
      subTitleIcon: AddUserIcon,
      date: moment(),
      isGreen: true,
    },
    {
      title: 'حذف یک شخص',
      subTitle: '1234567890',
      subTitleIcon: RemoveUserIcon,
      date: moment(),
      isGreen: false,
    },
  ]

  return {
    timeLineHistories
  }
}

export default useAdminHighRiskIndividualsLettersDetailDocumentsTimeLine;
