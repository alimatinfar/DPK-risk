import CardWithHeader from "../../../../../../components/others/Card/CardWithHeader/CardWithHeader.tsx";
import HighRiskIndividualsTimeLineHelpSection from "./HighRiskIndividualsTimeLineHelpSection.tsx";
import type {Moment} from "moment-jalaali";
import type {ReactNode} from "react";
import getDateValue from "../../../../../../utils/dateAndTIme/momentJalaliDateTime/getDateValue.ts";
import getFormattedMomentJalaliDateTime
  from "../../../../../../utils/dateAndTIme/momentJalaliDateTime/getFormattedMomentJalaliDateTime.ts";
import type {IconPropsType} from "../../../../../../components/svg/IconPropsType.ts";


export type TimeLineHistoryType = {
  title: string | ReactNode;
  subTitle: string | ReactNode;
  subTitleIcon?: (props: IconPropsType) => ReactNode;
  date: string | Moment;
  isGreen?: boolean;
}

export type HighRiskIndividualsTimeLineProps = {
  histories: TimeLineHistoryType[]
}

function HighRiskIndividualsTimeLine(
  {histories}: HighRiskIndividualsTimeLineProps
) {
  return (
    <div className='w-75'>
      <CardWithHeader
        title='تایم لاین تغییرات' customHeaderRender={(
        <div className='flex flex-col items-center gap-y-1.5'>
          <p className='font-medium'>
            تایم لاین تغییرات
          </p>

          <div className='flex-center'>
            <HighRiskIndividualsTimeLineHelpSection
              title='خروج از لیست افراد پر ریسک'
            />

            <span className='h-3 w-[1.5px] bg-gray-300'></span>

            <HighRiskIndividualsTimeLineHelpSection
              title='ورود به لیست افراد پر ریسک'
              isGreen
            />
          </div>
        </div>
      )}
      >
        <div className='flex flex-col'>
          {histories.map((history, index) => {

            const dateString = getFormattedMomentJalaliDateTime({
              date: getDateValue(history.date), mode: 'jDate'
            })

            const subTitleElement = (
              <span className='text-[11px] text-gray-500'>
                {history.subTitle}
              </span>
            )

            return (
              <div
                key={index}
                className='grid grid-cols-2'
              >
                <div className='relative flex flex-col items-end justify-center gap-y-1 pl-3 border-l-[3px] border-gray-100 pt-4 pb-4'>
                  <span className='text-xs'>
                    {history.title}
                  </span>
                  {history.subTitleIcon ? (
                    <div className='flex items-center gap-x-1'>
                      <history.subTitleIcon />

                      {subTitleElement}
                    </div>
                  ) : subTitleElement}

                  <span
                    className={`
                      h-2 w-2 rounded-full absolute -left-1.5 inset-y-0 my-auto
                      ${history.isGreen ? 'bg-green-500' : 'bg-red-500'}
                    `}
                  ></span>
                </div>

                <div className='flex items-center pr-3 text-xs'>
                  {dateString}
                </div>
              </div>
            )
          })}
        </div>
      </CardWithHeader>
    </div>
  );
}

export default HighRiskIndividualsTimeLine;
