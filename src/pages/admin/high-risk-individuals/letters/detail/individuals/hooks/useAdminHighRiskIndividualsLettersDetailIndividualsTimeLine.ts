import type {HighRiskIndividualsTimeLineProps} from "../../HighRiskIndividualsTimeLine/HighRiskIndividualsTimeLine.tsx";
import moment from "moment-jalaali";
import LetterIcon from "../../../../../../../components/svg/LetterIcon.tsx";
import type {CustomResponseType} from "../../../../../../../request/types/CustomResponseType.ts";
import type {AdminHighRiskIndividualsDetailItemResponseType} from "../../../../individuals/detail/index.types.ts";
import {useMemo} from "react";
import displayDate from "../../../../../../../utils/display/displayDate.ts";
import sortCustomersForTimeLine from "../../HighRiskIndividualsTimeLine/utils/sortCustomersForTimeLine.ts";


type Props = {
  responseData: CustomResponseType<AdminHighRiskIndividualsDetailItemResponseType[]> | undefined;
}

function useAdminHighRiskIndividualsLettersDetailIndividualsTimeLine(
  {responseData}: Props
) {

  const timeLineHistories: HighRiskIndividualsTimeLineProps['histories'] = useMemo(function () {
    const finalData = responseData?.data || []
    const sortedLetters = sortCustomersForTimeLine(finalData) as AdminHighRiskIndividualsDetailItemResponseType[]

    return sortedLetters?.map(item => ({
      title: item.letterRefTitle,
      subTitle: item.letterNo,
      subTitleIcon: LetterIcon,
      date: displayDate(
        item?.isOut ? item?.letterDate : item?.isOutValidityDate ? item?.validityDate : item?.letterDate
      ),
      isGreen: !item.isOut && !item?.isOutValidityDate,
    }))
  }, [responseData])

  return {
    timeLineHistories
  }
}

export default useAdminHighRiskIndividualsLettersDetailIndividualsTimeLine;
