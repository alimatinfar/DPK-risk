import type {
  CSSProperties,
  RefObject,
} from 'react';

import {
  CATCOLOR,
  CATS,
  getCategoryIndex,
  toFa,
  mix,
} from './riskData';

import { RiskFactorList } from './RiskFactorList';

import styles from './RiskCalculation.module.css';

type Props = {
  score: number;

  selectedFactor: number;

  onSelectFactor: (index: number) => void;

  onRestart: () => void;

  reportRef: RefObject<HTMLDivElement | null>;

  badgeRef: RefObject<HTMLDivElement | null>;

  visible: boolean;

  arrived: boolean;
};

export function RiskReport(
  {
    score, selectedFactor, onSelectFactor, onRestart, reportRef, badgeRef, visible, arrived
  }: Props
) {
  const categoryIndex =
    getCategoryIndex(score);

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
          <span className={styles.badgeSweep} />

          <span className={styles.orbitDot}>
            <i />
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
            <i />

            <span>
              {CATS[categoryIndex].label}
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
            {[
              'خیلی کم',
              'کم',
              'متوسط',
              'بالا',
              'خیلی بالا',
            ].map((label, index) => (
              <span key={label}>
                {index === categoryIndex ? (
                  <b>{label}</b>
                ) : (
                  label
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
        />
      </div>

      <div
        className={[
          styles.repFoot,
          styles.rv,
        ].join(' ')}
      >
        <span>
          تاریخ ارزیابی:{' '}
          <b>۱۴۰۵/۰۶/۲۳</b>
        </span>

        <button
          type="button"
          className={styles.reBtn}
          onClick={onRestart}
        >
          ↺ محاسبهٔ جدید
        </button>
      </div>
    </div>
  );
}
