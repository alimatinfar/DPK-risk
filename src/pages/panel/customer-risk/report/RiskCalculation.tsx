import { useState } from 'react';

import { RiskReport } from './RiskReport';
import { RiskScene } from './RiskScene';
import { useRiskAnimation } from './useRiskAnimation';

import type { CalculationState } from './useRiskAnimation';

import styles from './RiskCalculation.module.css';

type Props = {
  score?: number;
};

export function RiskCalculation(
  {
    score = 90,
  }: Props
) {
  const [calculationState, setCalculationState] =
    useState<CalculationState>('empty');

  const [selectedFactor, setSelectedFactor] =
    useState(0);

  const animation = useRiskAnimation({
    calculationState,
    setCalculationState,
    score,
  });

  const handleStart = () => {
    if (calculationState !== 'empty') {
      return;
    }

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
        onRestart={handleRestart}
        reportRef={animation.reportRef}
        badgeRef={animation.badgeRef}
        visible={animation.reportVisible}
        arrived={animation.reportArrived}
      />
    </div>
  );
}
