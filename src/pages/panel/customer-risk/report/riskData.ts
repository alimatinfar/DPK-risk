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

export const CATS = [
  {
    label:
      'مشتری با ریسک تعامل کاری خیلی کم',
  },
  {
    label:
      'مشتری با ریسک تعامل کاری کم',
  },
  {
    label:
      'مشتری با ریسک تعامل کاری متوسط',
  },
  {
    label:
      'مشتری با ریسک تعامل کاری بالا',
  },
  {
    label:
      'مشتری با ریسک تعامل کاری خیلی بالا',
  },
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
  score: number,
) {
  return Math.min(
    4,
    Math.floor(score / 20),
  );
}
