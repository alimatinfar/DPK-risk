import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import styles from './index.module.css';

const NODES = [
  {
    color: '#0070f3',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
      </svg>
    ),
  },
  {
    color: '#8b5cf6',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    color: '#f59e0b',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
];

type Flow = {
  element: SVGPathElement;
  length: number;
  speed: number;
  offset: number;
};

const createSvgElement = <K extends keyof SVGElementTagNameMap>(
  tag: K,
  attributes: Record<string, string>,
) => {
  const element = document.createElementNS(
    'http://www.w3.org/2000/svg',
    tag,
  );

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
};

export default function PanelCustomerRiskLoading() {
  const stageRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const flowsRef = useRef<Flow[]>([]);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setIsActive(true)
    }, 100)
  }, []);

  const buildPaths = useCallback(() => {
    const stage = stageRef.current;
    const core = coreRef.current;
    const svg = svgRef.current;

    if (!stage || !core || !svg) {
      return;
    }

    const baseGroup = svg.querySelector('[data-base]');
    const flowGroup = svg.querySelector('[data-flow]');

    if (!baseGroup || !flowGroup) {
      return;
    }

    baseGroup.innerHTML = '';
    flowGroup.innerHTML = '';
    flowsRef.current = [];

    const stageRect = stage.getBoundingClientRect();
    const coreRect = core.getBoundingClientRect();

    const centerX =
      coreRect.left +
      coreRect.width / 2 -
      stageRect.left;

    const centerY =
      coreRect.top +
      coreRect.height / 2 -
      stageRect.top;

    const radius = coreRect.width / 2;

    const nodeRects = nodeRefs.current.map(
      (node) => node?.getBoundingClientRect(),
    );

    nodeRefs.current.forEach((node, index) => {
      const nodeRect = nodeRects[index];

      if (!nodeRect) {
        return;
      }

      const color = NODES[index].color;

      const x1 =
        nodeRect.left +
        nodeRect.width / 2 -
        stageRect.left;

      const y1 =
        nodeRect.top -
        stageRect.top -
        2;

      const dx = [-26, 0, 26][index];

      const x2 = centerX + dx;

      const y2 =
        centerY +
        Math.sqrt(radius * radius - dx * dx) +
        1;

      const midY = y1 + (y2 - y1) * 0.42;

      const path = `
        M ${x1} ${y1}
        C ${x1} ${midY},
          ${x2} ${midY},
          ${x2} ${y2}
      `;

      // Base path
      const basePath = createSvgElement('path', {
        d: path,
        fill: 'none',
        stroke: '#e9e9ec',
        'stroke-width': '1.5',
      });

      baseGroup.appendChild(basePath);

      // Animated path
      const flowPath = createSvgElement('path', {
        d: path,
        fill: 'none',
        stroke: color,
        'stroke-width': '2',
        'stroke-linecap': 'round',
      });

      flowPath.style.filter =
        `drop-shadow(0 0 4px ${color}55)`;

      flowGroup.appendChild(flowPath);

      const length = flowPath.getTotalLength();

      flowPath.style.strokeDasharray = `12 ${length - 12}`;
      flowPath.style.strokeDashoffset = '0';

      flowsRef.current.push({
        element: flowPath,
        length,
        speed: 135 + index * 12,
        offset: 0,
      });
    });
  }, []);

  useEffect(() => {
    buildPaths();

    const resizeObserver = new ResizeObserver(() => {
      buildPaths();
    });

    if (stageRef.current) {
      resizeObserver.observe(stageRef.current);
    }

    window.addEventListener('resize', buildPaths);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', buildPaths);
    };
  }, [buildPaths]);

  useEffect(() => {
    let animationFrameId: number;

    const tick = () => {
      flowsRef.current.forEach((flow, index) => {
        flow.offset -= flow.speed / 60;

        flow.element.style.strokeDashoffset =
          String(flow.offset);

        if (isActive) {
          const phase =
            (((-flow.offset) % flow.length) +
              flow.length) %
            flow.length;

          nodeRefs.current[index]?.classList.toggle(
            styles.lit,
            phase < 48,
          );
        }
      });

      animationFrameId =
        requestAnimationFrame(tick);
    };

    animationFrameId =
      requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isActive]);

  useEffect(() => {
    flowsRef.current.forEach((flow) => {
      flow.element.classList.toggle(
        styles.on,
        isActive,
      );
    });
  }, [isActive]);

  const handleToggle = () => {
    setIsActive((previous) => !previous);
  };

  return (
    <div
      ref={stageRef}
      className={`${styles.stage} ${
        isActive ? styles.active : ''
      }`}
    >
      <svg
        ref={svgRef}
        className={styles.wires}
      >
        <g data-base />
        <g data-flow />
      </svg>

      <div className={styles.status}>
        <span className={styles.statusDot} />

        <span>
          {isActive
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
          className={`${styles.coreWave} ${styles.waveTwo}`}
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
              nodeRefs.current[index] = element;
            }}
            className={styles.node}
            style={
              {
                '--node-color': node.color,
              } as React.CSSProperties
            }
          >
            {node.icon}
          </div>
        ))}
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.button}
          onClick={handleToggle}
        >
          {isActive
            ? 'پایان محاسبه'
            : 'شروع محاسبه'}
        </button>
      </div>
    </div>
  );
}
