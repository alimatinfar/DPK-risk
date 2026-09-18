import type { CSSProperties } from 'react';

import {
  toFa,
  totalOf,
  type Factor,
} from './riskData';

import styles from './RiskCalculation.module.css';

type Props = {
  factor: Factor;
};

export function RiskFactorDetail({
                                   factor,
                                 }: Props) {
  return (
    <div
      className={[
        styles.detail,
        styles.rv,
      ].join(' ')}
    >
      <div
        key={factor.name}
        className={styles.detailInner}
        style={
          {
            '--c': factor.color,
          } as CSSProperties
        }
      >
        <div
          className={styles.detailTop}
        >
          <h3>
            {factor.name}
          </h3>

          <span
            className={styles.dScore}
          >
            {toFa(factor.triggered)}
            {' '}از{' '}
            {toFa(totalOf(factor))}
            {' '}زیرشاخص فعال
          </span>
        </div>

        <div
          className={styles.dSummary}
        >
          <b>
            {toFa(factor.triggered)}
          </b>{' '}
          زیرشاخص فعال از مجموع{' '}
          <b>
            {toFa(totalOf(factor))}
          </b>{' '}
          زیرشاخص این شاخص — امتیاز شاخص:{' '}
          <b>
            {toFa(factor.score)}
          </b>
        </div>

        <div className={styles.dGrid}>
          {factor.groups.map(
            (group) => (
              <div
                key={group.name}
                className={styles.dGroup}
                style={
                  {
                    '--c': factor.color,
                  } as CSSProperties
                }
              >
                <div
                  className={
                    styles.dGroupTitle
                  }
                >
                  {group.name}
                </div>

                {group.items.map(
                  (item) => (
                    <div
                      key={item.t}
                      className={[
                        styles.dItem,
                        item.on
                          ? styles.on
                          : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      <span
                        className={
                          styles.dot
                        }
                      />

                      <span
                        className={
                          styles.t
                        }
                      >
                        {item.t}
                      </span>

                      <span
                        className={
                          styles.wnum
                        }
                      >
                        {toFa(item.w)}
                      </span>
                    </div>
                  ),
                )}
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
