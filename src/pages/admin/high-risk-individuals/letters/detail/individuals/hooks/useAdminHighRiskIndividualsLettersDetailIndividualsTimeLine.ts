import type {HighRiskIndividualsTimeLineProps} from "../../HighRiskIndividualsTimeLine/HighRiskIndividualsTimeLine.tsx";
import moment from "moment-jalaali";
import LetterIcon from "../../../../../../../components/svg/LetterIcon.tsx";

function useAdminHighRiskIndividualsLettersDetailIndividualsTimeLine() {

  const timeLineHistories: HighRiskIndividualsTimeLineProps['histories'] = [
    {
      title: 'قوه قضائیه',
      subTitle: 'ایجاد لیست',
      subTitleIcon: LetterIcon,
      date: moment(),
      isGreen: true,
    },
    {
      title: 'قوه قضائیه',
      subTitle: '1234567890',
      subTitleIcon: LetterIcon,
      date: moment(),
      isGreen: false,
    },
    {
      title: 'قوه قضائیه',
      subTitle: '1234567890',
      subTitleIcon: LetterIcon,
      date: moment(),
      isGreen: true,
    },
    {
      title: 'قوه قضائیه',
      subTitle: '1234567890',
      subTitleIcon: LetterIcon,
      date: moment(),
      isGreen: false,
    },
  ]

  return {
    timeLineHistories
  }
}

export default useAdminHighRiskIndividualsLettersDetailIndividualsTimeLine;
