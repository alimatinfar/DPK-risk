import type {CSSProperties} from 'react';

import {
  toFa,
  totalOf,
} from './riskData';

import {RiskFactorDetail} from './RiskFactorDetail';

import styles from './RiskCalculation.module.css';
import useRiskFactorList from "../hooks/useRiskFactorList.tsx";
import type {RiskCalculationProps} from "./RiskCalculation.tsx";

export type RiskFactorListProps = {
  selectedFactor: number;
  onSelectFactor: (index: number) => void;
} & Pick<RiskCalculationProps, 'responseData'>

function FactorIcon({
                      type,
                    }: {
  type: 'customer' | 'service' | 'region';
}) {
  if (type === 'customer') {
    return (
      <>
        <circle
          cx="12"
          cy="8"
          r="4"
        />

        <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5"/>
      </>
    );
  }

  if (type === 'service') {
    return (
      <>
        <circle
          cx="12"
          cy="12"
          r="9"
        />

        <path d="M12 7v5l3 2"/>
      </>
    );
  }

  return (
    <>
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z"/>

      <circle
        cx="12"
        cy="10"
        r="2.5"
      />
    </>
  );
}

export function RiskFactorList(
  {
    selectedFactor, onSelectFactor, responseData
  }: RiskFactorListProps
) {

  const {
    selected, factors
  } = useRiskFactorList({
    selectedFactor, responseData
  })

  return (
    <>
      <div
        className={[
          styles.flist,
          styles.rv,
        ].join(' ')}
      >
        {factors.map(
          (factor, index) => {
            const selectedItem =
              index === selectedFactor;

            return (
              <button
                key={factor.name}
                type="button"
                className={[
                  styles.fitemHead,
                  selectedItem
                    ? styles.sel
                    : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                style={
                  {
                    '--c': factor.color,
                  } as CSSProperties
                }
                onClick={() =>
                  onSelectFactor(index)
                }
              >
                <div
                  className={
                    styles.fIcon
                  }
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <FactorIcon
                      type={factor.icon}
                    />
                  </svg>
                </div>

                <div
                  className={styles.fName}
                >
                  <h4>
                    {factor.name}
                  </h4>

                  <div
                    className={styles.fSub}
                  >
                    مبنای محاسبه:{' '}
                    <b>
                      {toFa(
                        factor.triggered,
                      )}{' '}
                      از{' '}
                      {toFa(
                        totalOf(factor),
                      )}{' '}
                      زیرشاخص
                    </b>
                  </div>
                </div>

                <div
                  className={styles.fScore}
                >
                  <b>
                    {toFa(Number(factor.score.toFixed(2)))}
                  </b>
                </div>
              </button>
            );
          },
        )}
      </div>

      {selected && (
        <RiskFactorDetail
          factor={selected}
        />
      )}
    </>
  );
}
