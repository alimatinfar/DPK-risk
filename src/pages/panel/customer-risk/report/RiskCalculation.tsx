import {RiskReport} from './RiskReport';
import {RiskScene} from './RiskScene';

import styles from './RiskCalculation.module.css';
import type {CustomResponseType} from "../../../../request/types/CustomResponseType.ts";
import type {CustomerRiskResponseType} from "../index.types.ts";
import useRiskCalculation from "../hooks/useRiskCalculation.ts";

export type RiskCalculationProps = {
  error: Error | null;
  loading: boolean;
  fetchRiskData: () => void;
  responseData: CustomResponseType<CustomerRiskResponseType> | undefined;
};

export function RiskCalculation(
  {
    loading, fetchRiskData, responseData, error
  }: RiskCalculationProps
) {

  const {
    animation, calculationState, handleStart, score, selectedFactor, setSelectedFactor, levelRangeData
  } = useRiskCalculation({
    responseData, fetchRiskData, loading, error
  })

  return (
    <div
      ref={animation.stageRef}
      className={styles.stage}
    >
      <RiskScene
        calculationState={calculationState}
        onStart={handleStart}
        sceneRef={animation.sceneRef}
        svgRef={animation.svgRef}
        coreRef={animation.coreRef}
        nodeRefs={animation.nodeRefs}
        hidden={animation.sceneHidden}
      />

      <RiskReport
        score={score}
        selectedFactor={selectedFactor}
        onSelectFactor={setSelectedFactor}
        reportRef={animation.reportRef}
        badgeRef={animation.badgeRef}
        visible={animation.reportVisible}
        arrived={animation.reportArrived}
        responseData={responseData}
        levelRangeData={levelRangeData}
      />
    </div>
  );
}
