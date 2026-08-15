
import {createContext, useContext, useState} from "react";
import {type SetStateType} from "../types/SetStateType.ts";
import {type ChildrenPropsType} from "../types/ChildrenPropsType.tsx";

type currentStepType = number
type FormStepContextType = [currentStep:currentStepType, setCurrentStep: SetStateType<currentStepType>]

const FormStepContext = createContext<FormStepContextType>([1, () => null]);

export default function FormStepContextProvider({children}: ChildrenPropsType) {

  const [currentStep, setCurrentStep] = useState<currentStepType>(1)

  return (
    <FormStepContext.Provider value={[currentStep, setCurrentStep]}>
      {children}
    </FormStepContext.Provider>
  );
}

export function useFormStepContext() {
  return useContext(FormStepContext);
}
