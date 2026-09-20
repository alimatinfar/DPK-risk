import {useEffect, useState} from "react";
import {type CalculationState, useRiskAnimation} from "../report/useRiskAnimation.ts";
import type {RiskCalculationProps} from "../report/RiskCalculation.tsx";
import useRiskReportLevelRange from "./useRiskReportLevelRange.ts";

function useRiskCalculation(
  {
    responseData, fetchRiskData, loading, error
  }: Pick<RiskCalculationProps,
    'responseData' | 'fetchRiskData' | 'loading' | 'error'
  >
) {

  const score = responseData?.data?.score || 0

  const [calculationState, setCalculationState] = useState<CalculationState>('empty');

  const [selectedFactor, setSelectedFactor] = useState(0);

  const {
    levelRangeLoading, levelRangeData
  } = useRiskReportLevelRange({
    setCalculationState
  })

  const animation = useRiskAnimation({
    calculationState, setCalculationState, score, loading, responseData, levelRangeData
  });

  const handleStart = () => {
    if (calculationState !== 'empty') {
      return;
    }

    fetchRiskData()
    setCalculationState('calculating');
  };

  const handleRestart = () => {
    animation.reset();

    setSelectedFactor(0);
    setCalculationState('empty');

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (!error) return
    setCalculationState('error')
  }, [error]);

  return {
    animation, calculationState, handleStart, score, selectedFactor, setSelectedFactor, handleRestart,
    levelRangeData
  }
}

export default useRiskCalculation;
