import type {CSSProperties, RefObject,} from 'react';

import {CATCOLOR, getCategoryIndex, toFa, mix,} from './riskData';

import {RiskFactorList} from './RiskFactorList';

import styles from './RiskCalculation.module.css';
import moment from 'moment-jalaali'
import getFormattedMomentJalaliDateTime
  from "../../../../utils/dateAndTIme/momentJalaliDateTime/getFormattedMomentJalaliDateTime.ts";
import type {RiskCalculationProps} from "./RiskCalculation.tsx";
import type {CustomerRiskLevelRangeItemResponseType} from "../index.types.ts";

export type RiskReportProps = {
  score: number;
  selectedFactor: number;
  onSelectFactor: (index: number) => void;
  reportRef: RefObject<HTMLDivElement | null>;
  badgeRef: RefObject<HTMLDivElement | null>;
  visible: boolean;
  arrived: boolean;
  levelRangeData: CustomerRiskLevelRangeItemResponseType[] | undefined;
} & Pick<RiskCalculationProps, 'responseData'>

export function RiskReport(
  {
    score, selectedFactor, onSelectFactor, reportRef, badgeRef, visible, arrived, responseData, levelRangeData
  }: RiskReportProps
) {

  const categoryIndex = getCategoryIndex({score, levelRangeData});

  const categoryColor =
    CATCOLOR[categoryIndex];

  const reportClassName = [
    styles.report,
    visible ? styles.show : '',
    arrived ? styles.arrived : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={reportRef}
      className={reportClassName}
      style={
        {
          '--c': categoryColor,
        } as CSSProperties
      }
    >
      <div
        className={[
          styles.repHead,
          styles.rv,
        ].join(' ')}
      >
        <div
          ref={badgeRef}
          className={styles.scoreBadge}
        >
          <span className={styles.badgeSweep}/>

          <span className={styles.orbitDot}>
            <i/>
          </span>

          <b id="scoreNum">
            ۰
          </b>

          <span className={styles.lbl}>
            از ۱۰۰
          </span>
        </div>

        <div className={styles.repTitle}>
          <h2>
            نتیجهٔ محاسبه ریسک
          </h2>

          <span
            className={styles.catChip}
          >
            <i/>

            <span>
              {`مشتری با ریسک تعامل کاری ${levelRangeData?.[categoryIndex]?.levelTitle}`}
            </span>
          </span>

          <div
            className={styles.catRange}
          >
            بازهٔ این دسته:{' '}
            <b>
              {toFa(categoryIndex * 20)}
              {' '}تا{' '}
              {toFa(
                categoryIndex * 20 + 20,
              )}
            </b>
          </div>
        </div>

        <div className={styles.headScale}>
          <div
            className={styles.scaleTrack}
            style={
              {
                '--pos': `${score}%`,
              } as CSSProperties
            }
          >
            {CATCOLOR.map(
              (color, index) => (
                <span
                  key={color}
                  style={{
                    background:
                      index === categoryIndex
                        ? color
                        : mix(color, 0.78),

                    boxShadow:
                      index === categoryIndex
                        ? `0 0 12px -2px ${color}`
                        : undefined,
                  }}
                />
              ),
            )}
          </div>

          <div
            className={
              styles.scaleLabel
            }
          >
            {levelRangeData?.map((item, index) => (
              <span key={item?.id}>
                {index === categoryIndex ? (
                  <b>{item?.levelTitle}</b>
                ) : (
                  item?.levelTitle
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.repBody}>
        <RiskFactorList
          selectedFactor={selectedFactor}
          onSelectFactor={onSelectFactor}
          responseData={responseData}
        />
      </div>

      <div
        className={`${[
          styles.repFoot,
          styles.rv,
        ].join(' ')} flex-center`}
      >
        <span>
          تاریخ ارزیابی:{' '}
          <b dir='ltr'>{getFormattedMomentJalaliDateTime({date: moment(), mode: 'jDate'})}</b>
        </span>
      </div>
    </div>
  );
}
