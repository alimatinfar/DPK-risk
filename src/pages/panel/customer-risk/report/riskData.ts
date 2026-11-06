import type {RiskReportProps} from "./RiskReport.tsx";

export type FactorItem = {
  t: string;
  w: number;
  on?: boolean;
};

export type FactorGroup = {
  name: string;
  items: FactorItem[];
};

export type Factor = {
  name: string;
  score: number;
  triggered: number;
  color: string;
  icon: 'customer' | 'service' | 'region';
  groups: FactorGroup[];
};

export const SCORE = 52;

export const CATCOLOR = [
  '#10B981',
  '#84CC16',
  '#F59E0B',
  '#F97316',
  '#EF4444',
];

export function toFa(
  value: number | string,
) {
  return String(value)
    .replace(
      /\d/g,
      (digit) =>
        '۰۱۲۳۴۵۶۷۸۹'[Number(digit)],
    )
    .replace(/\./g, '٫');
}

export function mix(
  hex: string,
  weight: number,
) {
  const n = parseInt(
    hex.slice(1),
    16,
  );

  let r = n >> 16;
  let g = (n >> 8) & 255;
  let b = n & 255;

  r = Math.round(
    r + (255 - r) * weight,
  );

  g = Math.round(
    g + (255 - g) * weight,
  );

  b = Math.round(
    b + (255 - b) * weight,
  );

  return (
    '#' +
    (
      (1 << 24) |
      (r << 16) |
      (g << 8) |
      b
    )
      .toString(16)
      .slice(1)
  );
}

export function totalOf(
  factor: Factor,
) {
  return factor.groups.reduce(
    (total, group) =>
      total + group.items.length,
    0,
  );
}

export function getCategoryIndex(
  {score, levelRangeData}: {score: number, levelRangeData: RiskReportProps['levelRangeData']}
) {
  return levelRangeData?.findIndex(
    (level) =>
      score >= level.numberFrom &&
      score <= level.numberTo
  ) || 0
}
