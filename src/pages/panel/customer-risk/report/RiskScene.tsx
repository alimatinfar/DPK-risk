import type {
  CSSProperties,
  RefObject,
} from 'react';

import type { CalculationState } from './useRiskAnimation';

import styles from './RiskCalculation.module.css';
import Button from "../../../../components/Form/Button/Button.tsx";

type Props = {
  calculationState: CalculationState;

  onStart: () => void;

  sceneRef: RefObject<HTMLDivElement | null>;

  svgRef: RefObject<SVGSVGElement | null>;

  coreRef: RefObject<HTMLDivElement | null>;

  nodeRefs: RefObject<(HTMLDivElement | null)[]>;

  hidden: boolean;
};

const NODES = [
  {
    color: '#0070f3',
    icon: (
      <>
        <circle
          cx="12"
          cy="8"
          r="4"
        />

        <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
      </>
    ),
  },

  {
    color: '#8b5cf6',
    icon: (
      <>
        <circle
          cx="12"
          cy="12"
          r="9"
        />

        <path d="M12 7v5l3 2" />
      </>
    ),
  },

  {
    color: '#f59e0b',
    icon: (
      <>
        <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />

        <circle
          cx="12"
          cy="10"
          r="2.5"
        />
      </>
    ),
  },
];

export function RiskScene(
  {
    calculationState, onStart, sceneRef, svgRef, coreRef, nodeRefs, hidden
  }: Props
) {
  const active =
    calculationState === 'calculating';

  const leaving =
    calculationState === 'result';

  const sceneClassName = [
    styles.scene,
    active ? styles.active : '',
    leaving ? styles.leaving : '',
    hidden ? styles.hidden : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={sceneRef}
      className={sceneClassName}
    >
      <svg
        ref={svgRef}
        className={styles.wires}
      >
        <g data-base-group />
        <g data-flow-group />
      </svg>

      <div className={styles.status}>
        <span className={styles.sDot} />

        <span>
          {active
            ? 'در حال محاسبه…'
            : 'در انتظار شروع'}
        </span>
      </div>

      <div
        ref={coreRef}
        className={styles.core}
      >
        <div className={styles.coreWave} />

        <div
          className={[
            styles.coreWave,
            styles.w2,
          ].join(' ')}
        />

        <div className={styles.coreRing} />

        <div className={styles.coreBorder} />

        <div className={styles.coreInner}>
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className={styles.nodes}>
        {NODES.map((node, index) => (
          <div
            key={node.color}
            ref={(element) => {
              nodeRefs.current[index] =
                element;
            }}
            className={styles.node}
            style={
              {
                '--c': node.color,
              } as CSSProperties
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
              {node.icon}
            </svg>
          </div>
        ))}
      </div>

      <div className='flex flex-col items-center gap-y-3 max-w-[450px] mx-auto pt-6'>
        <p className='text-2xl font-semibold'>
          محاسبه ریسک مشتری
        </p>

        <p className='text-gray-500 text-center leading-6'>
          محاسبه ریسک با پردازش شاخص‌های مختلف انجام می‌شود و ممکن است چند دقیقه زمان ببرد. لطفاً تا تکمیل فرآیند شکیبا باشید.
        </p>

        <div className='w-45'>
          <Button
            type="button"
            onClick={onStart}
            disabled={active}
            loading={active}
          >
            شروع محاسبه
          </Button>
        </div>
      </div>
    </div>
  );
}
