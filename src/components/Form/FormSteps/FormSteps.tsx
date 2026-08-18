import type {FormStepsTypes} from "./index.types.ts";
import TickIcon from "../../svg/TickIcon.tsx";
import Card from "../../others/Card/Card.tsx";
import SuspenseRenderLogicDefaultContainer from "../../others/RenderLogic/SuspenseRenderLogicDefaultContainer.tsx";
import Loading from "../../others/Loading/Loading.tsx";


type Props = {
  steps: FormStepsTypes[];
  currentStep: number;
}

function FormSteps(
  {steps, currentStep}: Props
) {
  return (
    <div className='flex flex-col gap-y-4'>
      <Card className='flex items-center gap-x-2 px-4 pt-4 pb-13'>
        {steps.map((step, index) => {

          const isLast = index + 1 === steps.length
          const isCurrentStep = currentStep === index + 1
          const isBeforeCurrentStep = currentStep > index + 1

          return (
            <>
              <div className={`
              h-6.5 w-6.5 flex-center rounded-full pt-[1px] duration-200 relative border
              ${isCurrentStep ? 'border-transparent bg-primary text-white' : isBeforeCurrentStep ? 'border-transparent bg-primary/10' : 'border-gray-300'}
            `}>
                {isBeforeCurrentStep ? <TickIcon/> : (index + 1)}

                <div className={`absolute -bottom-10 ${isLast ? 'left-0' : 'right-0'} w-max text-gray-900`}>
                  {step.text}
                </div>
              </div>

              {!isLast && (
                <div
                  className={`duration-200 h-px flex-1 ${isBeforeCurrentStep ? 'bg-primary' : 'bg-gray-300'}`}
                ></div>
              )}
            </>
          )
        })}
      </Card>

      <SuspenseRenderLogicDefaultContainer fallback={<Loading />}>
        {steps[currentStep - 1]?.children || null}
      </SuspenseRenderLogicDefaultContainer>
    </div>
  );
}

export default FormSteps;
