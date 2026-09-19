import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type RefObject,
  type SetStateAction,
} from 'react';

import {
  CATCOLOR,
  getCategoryIndex,
  SCORE,
  toFa,
} from './riskData';

import styles from './RiskCalculation.module.css';
import type {RiskCalculationProps} from "./RiskCalculation.tsx";

export type CalculationState =
  | 'empty'
  | 'calculating'
  | 'result';

type Props = {
  calculationState: CalculationState;

  setCalculationState: Dispatch<
    SetStateAction<CalculationState>
  >;

  score: number;
} & Pick<RiskCalculationProps, 'responseData' | 'loading'>;

type Flow = {
  el: SVGPathElement;
  len: number;
  dash: string;
  speed: number;
  off: number;
};

const SVG_NS = 'http://www.w3.org/2000/svg';

export function useRiskAnimation(
  {
    calculationState, setCalculationState, score, loading, responseData
  }: Props
) {
  const stageRef =
    useRef<HTMLDivElement>(null);

  const sceneRef =
    useRef<HTMLDivElement>(null);

  const svgRef =
    useRef<SVGSVGElement>(null);

  const coreRef =
    useRef<HTMLDivElement>(null);

  const reportRef =
    useRef<HTMLDivElement>(null);

  const badgeRef =
    useRef<HTMLDivElement>(null);

  const nodeRefs =
    useRef<(HTMLDivElement | null)[]>(
      [],
    );

  const flowsRef =
    useRef<Flow[]>([]);

  const rafRef =
    useRef<number | null>(null);

  const finishTimerRef =
    useRef<number | null>(null);

  const reportTimerRef =
    useRef<number | null>(null);

  const ghostTimerRef =
    useRef<number | null>(null);

  const countTimerRef =
    useRef<number | null>(null);

  const ghostRef =
    useRef<HTMLDivElement | null>(
      null,
    );

  const [reportVisible, setReportVisible] =
    useState(false);

  const [reportArrived, setReportArrived] =
    useState(false);

  const [sceneHidden, setSceneHidden] =
    useState(false);

  const createSvgElement =
    useCallback(
      <T extends keyof SVGElementTagNameMap>(
        tag: T,
        attributes: Record<string, string>,
      ) => {
        const element =
          document.createElementNS(
            SVG_NS,
            tag,
          );

        Object.entries(
          attributes,
        ).forEach(
          ([key, value]) => {
            element.setAttribute(
              key,
              value,
            );
          },
        );

        return element as SVGElementTagNameMap[T];
      },
      [],
    );

  const buildPaths = useCallback(() => {
    const svg = svgRef.current;
    const scene = sceneRef.current;
    const core = coreRef.current;

    if (!svg || !scene || !core) {
      return;
    }

    const baseGroup =
      svg.querySelector<SVGGElement>(
        '[data-base-group]',
      );

    const flowGroup =
      svg.querySelector<SVGGElement>(
        '[data-flow-group]',
      );

    if (!baseGroup || !flowGroup) {
      return;
    }

    baseGroup.innerHTML = '';
    flowGroup.innerHTML = '';

    flowsRef.current = [];

    const sceneRect =
      scene.getBoundingClientRect();

    const coreRect =
      core.getBoundingClientRect();

    const centerX =
      coreRect.left +
      coreRect.width / 2 -
      sceneRect.left;

    const centerY =
      coreRect.top +
      coreRect.height / 2 -
      sceneRect.top;

    const radius =
      coreRect.width / 2;

    const nodeElements =
      nodeRefs.current;

    const nodeRects =
      nodeElements.map((node) =>
        node?.getBoundingClientRect(),
      );

    nodeElements.forEach(
      (node, index) => {
        if (!node) {
          return;
        }

        const nodeRect =
          nodeRects[index];

        if (!nodeRect) {
          return;
        }

        const color =
          node.style
            .getPropertyValue('--c')
            .trim();

        const x1 =
          nodeRect.left +
          nodeRect.width / 2 -
          sceneRect.left;

        const y1 =
          nodeRect.top -
          sceneRect.top -
          2;

        const dx = [
          32,
          0,
          -32,
        ][index];

        const x2 =
          centerX + dx;

        const y2 =
          centerY +
          Math.sqrt(
            radius * radius -
            dx * dx,
          ) +
          1;

        const midY =
          y1 +
          (y2 - y1) *
          0.42;

        const d =
          `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`;

        const basePath =
          createSvgElement(
            'path',
            {
              d,
              fill: 'none',
              stroke: '#e9e9ec',
              'stroke-width': '1.5',
            },
          );

        baseGroup.appendChild(
          basePath,
        );

        const flowPath =
          createSvgElement(
            'path',
            {
              d,
              fill: 'none',
              stroke: color,
              'stroke-width': '2',
              'stroke-linecap':
                'round',
            },
          );

        flowPath.style.filter =
          `drop-shadow(0 0 4px ${color}55)`;

        flowGroup.appendChild(
          flowPath,
        );

        const length =
          flowPath.getTotalLength();

        flowsRef.current.push({
          el: flowPath,
          len: length,
          dash: `12 ${length - 12}`,
          speed:
            135 + index * 12,
          off: 0,
        });
      },
    );

    const active =
      calculationState ===
      'calculating';

    flowsRef.current.forEach(
      (flow, index) => {
        flow.el.style.strokeDasharray =
          active
            ? `12 ${flow.len - 12}`
            : '2 16';

        flow.speed = active
          ? 135 + index * 12
          : 40 + index * 8;

        flow.el.style.strokeDashoffset =
          String(flow.off);
      },
    );
  }, [
    calculationState,
    createSvgElement,
  ]);

  const animationTick =
    useCallback(() => {
      const active =
        calculationState ===
        'calculating';

      flowsRef.current.forEach(
        (flow, index) => {
          flow.off -=
            flow.speed / 60;

          flow.el.style.strokeDashoffset =
            String(flow.off);

          const node =
            nodeRefs.current[index];

          if (!node) {
            return;
          }

          if (!active) {
            node.classList.remove(
              styles.lit,
            );

            return;
          }

          const phase =
            (((-flow.off) %
                flow.len) +
              flow.len) %
            flow.len;

          node.classList.toggle(
            styles.lit,
            phase < 48,
          );
        },
      );

      rafRef.current =
        requestAnimationFrame(
          animationTick,
        );
    }, [calculationState]);

  /*
   * ساخت path قبل از paint
   */
  useEffect(() => {
    buildPaths();

    const handleResize = () => {
      buildPaths();
    };

    window.addEventListener(
      'resize',
      handleResize,
    );

    return () => {
      window.removeEventListener(
        'resize',
        handleResize,
      );
    };
  }, [buildPaths]);

  /*
   * requestAnimationFrame
   */
  useEffect(() => {
    if (
      rafRef.current !== null
    ) {
      cancelAnimationFrame(
        rafRef.current,
      );
    }

    rafRef.current =
      requestAnimationFrame(
        animationTick,
      );

    return () => {
      if (
        rafRef.current !== null
      ) {
        cancelAnimationFrame(
          rafRef.current,
        );

        rafRef.current = null;
      }
    };
  }, [animationTick]);

  const countUpReport =
    useCallback(() => {
      const scoreElement =
        reportRef.current?.querySelector(
          '#scoreNum',
        );

      if (!scoreElement) {
        return;
      }

      if (
        countTimerRef.current !==
        null
      ) {
        clearInterval(
          countTimerRef.current,
        );
      }

      let step = 0;

      const steps = 32;

      countTimerRef.current =
        window.setInterval(() => {
          step++;

          const value =
            Math.round(
              score *
              (1 -
                Math.pow(
                  1 -
                  step /
                  steps,
                  3,
                )),
            );

          scoreElement.textContent =
            toFa(value);

          if (step >= steps) {
            if (
              countTimerRef.current !==
              null
            ) {
              clearInterval(
                countTimerRef.current,
              );

              countTimerRef.current =
                null;
            }
          }
        }, 26);
    }, [score]);

  const flyGhost = useCallback(
    (
      from: DOMRect,
      to: DOMRect,
      done: () => void,
    ) => {
      const categoryIndex =
        getCategoryIndex(score);

      const color =
        CATCOLOR[categoryIndex];

      const ghost =
        document.createElement(
          'div',
        );

      ghost.className =
        styles.ghost;

      ghost.style.setProperty(
        '--c',
        color,
      );

      ghost.style.left =
        `${from.left}px`;

      ghost.style.top =
        `${from.top}px`;

      ghost.style.width =
        `${from.width}px`;

      ghost.style.height =
        `${from.height}px`;

      document.body.appendChild(
        ghost,
      );

      ghostRef.current =
        ghost;

      /*
       * مجبور کردن browser به
       * commit کردن layout قبل از
       * تغییر position
       */
      ghost.getBoundingClientRect();

      requestAnimationFrame(() => {
        ghost.style.left =
          `${to.left}px`;

        ghost.style.top =
          `${to.top}px`;

        ghost.style.width =
          `${to.width}px`;

        ghost.style.height =
          `${to.height}px`;
      });

      ghostTimerRef.current =
        window.setTimeout(() => {
          ghost.style.transition =
            'opacity .22s ease';

          ghost.style.opacity = '0';

          window.setTimeout(() => {
            ghost.remove();

            if (
              ghostRef.current ===
              ghost
            ) {
              ghostRef.current =
                null;
            }

            done();
          }, 230);
        }, 730);
    },
    [score],
  );

  const finishCalculation =
    useCallback(() => {
      if (
        calculationState !==
        'calculating'
      ) {
        return;
      }

      const core =
        coreRef.current;

      const scene =
        sceneRef.current;

      if (!core || !scene) {
        return;
      }

      core.classList.add(
        styles.absorb,
      );

      scene.classList.add(
        styles.leaving,
      );

      /*
       * همان 430ms فایل اصلی
       */
      reportTimerRef.current =
        window.setTimeout(() => {
          const from =
            core.getBoundingClientRect();

          setReportVisible(true);

          /*
           * React باید فرصت داشته باشد
           * report.show را render کند.
           */
          requestAnimationFrame(() => {
            const badge =
              badgeRef.current;

            if (!badge) {
              return;
            }

            const to =
              badge.getBoundingClientRect();

            flyGhost(
              from,
              to,
              () => {
                setReportArrived(
                  true,
                );

                countUpReport();
              },
            );
          });
        }, 430);

      /*
       * بعد از 650ms صحنه hidden می‌شود.
       */
      window.setTimeout(() => {
        setSceneHidden(true);
      }, 650);

      setCalculationState(
        'result',
      );
    }, [
      calculationState,
      countUpReport,
      flyGhost,
      setCalculationState,
    ]);

  /*
   * شروع محاسبه
   */
  useEffect(() => {
    if (loading || !responseData?.data) return
    setCalculationState('result')
  }, [responseData, loading]);

  useEffect(() => {
    if (loading || !responseData?.data) return
    finishCalculation()
  }, [calculationState, finishCalculation, responseData, loading]);

  const reset = useCallback(() => {
    if (
      finishTimerRef.current !==
      null
    ) {
      clearTimeout(
        finishTimerRef.current,
      );

      finishTimerRef.current = null;
    }

    if (
      reportTimerRef.current !==
      null
    ) {
      clearTimeout(
        reportTimerRef.current,
      );

      reportTimerRef.current = null;
    }

    if (
      ghostTimerRef.current !==
      null
    ) {
      clearTimeout(
        ghostTimerRef.current,
      );

      ghostTimerRef.current = null;
    }

    if (
      countTimerRef.current !==
      null
    ) {
      clearInterval(
        countTimerRef.current,
      );

      countTimerRef.current = null;
    }

    if (ghostRef.current) {
      ghostRef.current.remove();
      ghostRef.current = null;
    }

    setReportVisible(false);
    setReportArrived(false);
    setSceneHidden(false);

    const scene =
      sceneRef.current;

    const core =
      coreRef.current;

    const report =
      reportRef.current;

    if (scene) {
      scene.classList.remove(
        styles.leaving,
        styles.active,
        styles.hidden,
      );
    }

    if (core) {
      core.classList.remove(
        styles.absorb,
      );
    }

    if (report) {
      report.classList.remove(
        styles.show,
        styles.arrived,
      );
    }

    nodeRefs.current.forEach(
      (node) => {
        node?.classList.remove(
          styles.lit,
        );
      },
    );

    flowsRef.current.forEach(
      (flow, index) => {
        flow.el.style.strokeDasharray =
          '2 16';

        flow.speed =
          40 + index * 8;

        flow.off = 0;

        flow.el.style.strokeDashoffset =
          '0';
      },
    );

    const scoreElement =
      report?.querySelector(
        '#scoreNum',
      );

    if (scoreElement) {
      scoreElement.textContent =
        '۰';
    }
  }, []);

  return {
    stageRef,
    sceneRef,
    svgRef,
    coreRef,
    reportRef,
    badgeRef,
    nodeRefs,
    reportVisible,
    reportArrived,
    sceneHidden,
    reset,
  };
}
