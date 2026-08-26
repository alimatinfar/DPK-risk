import CardWithHeader from "../../../../../../components/others/Card/CardWithHeader/CardWithHeader.tsx";
import HighRiskIndividualsTimeLineHelpSection from "./HighRiskIndividualsTimeLineHelpSection.tsx";



function HighRiskIndividualsTimeLine() {
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

      </CardWithHeader>
    </div>
  );
}

export default HighRiskIndividualsTimeLine;
