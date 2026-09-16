// risk-report.utils.ts

import type {PanelCustomerRiskCategoryType} from './index.types';

export const panelCustomerRiskToFa = (value: number | string) =>
  String(value)
    .replace(/\d/g, (digit) => '۰۱۲۳۴۵۶۷۸۹'[Number(digit)])
    .replace(/\./g, '٫');

export const RISK_CATEGORIES: PanelCustomerRiskCategoryType[] = [
  {
    min: 0,
    max: 50,
    label: 'مشتری با ریسک تعامل کاری خیلی کم',
    color: '#00c48c',
  },
  {
    min: 50,
    max: 200,
    label: 'مشتری با ریسک تعامل کاری کم',
    color: '#8bc34a',
  },
  {
    min: 200,
    max: 500,
    label: 'مشتری با ریسک تعامل کاری متوسط',
    color: '#f59e0b',
  },
  {
    min: 500,
    max: 1500,
    label: 'مشتری با ریسک تعامل کاری بالا',
    color: '#f97316',
  },
  {
    min: 1500,
    max: Infinity,
    label: 'مشتری با ریسک تعامل کاری خیلی بالا',
    color: '#ef4444',
  },
];

export const getRiskCategory = (
  score: number,
  categories = RISK_CATEGORIES,
) => {
  const index = categories.findIndex(
    ({min, max}) => score >= min && score < max,
  );

  return {
    index: index === -1 ? categories.length - 1 : index,
    category:
      categories[index === -1 ? categories.length - 1 : index],
  };
};

export const getRiskRange = (
  {min, max}: PanelCustomerRiskCategoryType
) => {
  if (max === Infinity) {
    return `از ${panelCustomerRiskToFa(min)} به بالا`;
  }

  return `از ${panelCustomerRiskToFa(min)} تا ${panelCustomerRiskToFa(max)}`;
}


export const PANEL_CUSTOMER_RISK_REPORT_FAKE_DATA = {
  score: 1600,

  factors: [
    {
      name: 'ریسک مشتری',
      en: 'Customer risk',
      score: 18.5,
      color: '#0070f3',

      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <circle cx="12" cy="8" r="4"/>
          <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5"/>
        </svg>
      ),
    },

    {
      name: 'ریسک سابقه خدمت',
      en: 'Service history',
      score: 7.25,
      color: '#8b5cf6',

      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <circle cx="12" cy="12" r="9"/>
          <path d="M12 7v5l3 2"/>
        </svg>
      ),
    },

    {
      name: 'ریسک منطقه',
      en: 'Region risk',
      score: 2417,
      color: '#f59e0b',

      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z"/>
          <circle cx="12" cy="10" r="2.5"/>
        </svg>
      ),
    },
  ],

  reportCode: 'RK-1405-0091',
  date: '۱۴۰۵/۰۶/۲۳',
};
