import React, {useEffect} from "react";
import {useFormStepContext} from "../../../contexts/FormStepContext.tsx";
import scrollToTop from "../../../utils/scrollToTop.ts";
import type {StepsTypes} from "./index.types.ts";
import TickIcon from "../../svg/TickIcon.tsx";

type StepsPropsType = {
  steps: StepsTypes[];
};

const StepComponent = ({steps}: StepsPropsType) => {
  const [currentStep] = useFormStepContext()

  useEffect(function () {
    scrollToTop()
  }, [currentStep])

  function findIndexById(steps: StepsTypes[], id: number) {
    for (let i = 0; i < steps.length; i++) {
      if (steps[i].id === id) {
        return i;
      }
    }
    return -1;
  }

  const findItem = findIndexById(steps, currentStep);

  return (
    <>

      <div className="flex flex-col items-center mb-8 px-5">
        <div className="flex items-center w-full">
          {steps.map((step, index) => {

            const lastIndex = index === steps.length - 1

            return (
              <div
                key={step.id}
                className={`step flex rounded-full text-white ${lastIndex ? '' : 'grow'}`}
              >
                <div
                  className={`h-6 w-6 ml-2 -translate-y-0.5 rounded-full flex items-center justify-center  ${
                    index < findItem || findItem == -1
                      ? "border border-primary"
                      : step.id === currentStep
                        ? "bg-primary"
                        : "border border-gray-500"
                  }`}
                >
                  {index < findItem || findItem == -1 ? (
                    <TickIcon/>
                  ) : (
                    <span
                      className={`text-xs ${
                        step.id === currentStep ? "text-white" : "text-gray-500"
                      }`}
                    >
                    {index + 1}
                  </span>
                  )}
                </div>
                <div className="flex flex-col space-y-2 flex-1 relative">
                  <div className='flex items-center'>
                    <span
                      className={`font-medium text-sm duration-300 ${
                        index < findItem ||
                        findItem == -1 ||
                        step.id === currentStep
                          ? "text-gray-900"
                          : "text-gray-500"
                      }`}
                    >
                      {step.text}
                    </span>

                    {index >= 0 && index + 1 < steps.length && (
                      <div
                        className={`h-px mx-4 self-center grow duration-300 ${
                          index < findItem || findItem == -1
                            ? "bg-primary"
                            : "bg-gray-500"
                        }`}
                      ></div>
                    )}
                  </div>

                  <span
                    className={`text-sm ${
                      index < findItem || findItem == -1
                        ? "text-gray-900"
                        : "text-gray-500"
                    }`}
                  >
                    {step.caption}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {steps[findItem]?.children && (
        <div>
          {steps[findItem].children}
        </div>
      )}

    </>
  );
};

export default StepComponent;
