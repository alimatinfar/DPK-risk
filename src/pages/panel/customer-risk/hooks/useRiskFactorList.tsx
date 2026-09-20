import {type Factor, type FactorGroup} from "../report/riskData.ts";
import type {RiskFactorListProps} from "../report/RiskFactorList.tsx";
import {useMemo} from "react";

const RISK_TYPE_CONFIG: Record<
  number,
  { color: string; icon: Factor['icon'] }
> = {
  1: {
    color: '#0070f3',
    icon: 'customer',
  },
  2: {
    color: '#8b5cf6',
    icon: 'service',
  },
  3: {
    color: '#f59e0b',
    icon: 'region',
  },
} as const

function useRiskFactorList(
  {
    selectedFactor, responseData
  }: Pick<RiskFactorListProps, 'selectedFactor' | 'responseData'>
) {

  const factors: Factor[] = useMemo(function () {
    const finalData = responseData?.data
    const typeMap = new Map<
      number,
      Factor & {
      groupMap: Map<number, FactorGroup>;
    }
    >();

    finalData?.riskFullHierarchy?.forEach((record) => {
      const {
        typeId,
        riskTypeName,
        calculate,
        isCalculate,
        groupId,
        groupName,
        subIndicatorName,
        subIndicatorRiskValue,
      } = record;

      // ایجاد سطح اول بر اساس typeId
      if (!typeMap.has(typeId)) {
        const config = RISK_TYPE_CONFIG[typeId];

        typeMap.set(typeId, {
          name: riskTypeName,
          score: 0,
          triggered: 0,
          color: config?.color ?? '#64748b',
          icon: config?.icon ?? 'customer',
          groups: [],
          groupMap: new Map(),
        });
      }

      const riskType = typeMap.get(typeId)!;

      // محاسبه score و triggered
      riskType.score += calculate;

      if (isCalculate) {
        riskType.triggered += 1;
      }

      // ایجاد گروه بر اساس groupId
      if (!riskType.groupMap.has(groupId)) {
        const group: FactorGroup = {
          name: groupName,
          items: [],
        };

        riskType.groupMap.set(groupId, group);
        riskType.groups.push(group);
      }

      const group = riskType.groupMap.get(groupId)!;

      // اضافه کردن آیتم به گروه
      group.items.push({
        t: subIndicatorName,
        w: subIndicatorRiskValue,
        on: isCalculate,
      });
    });

    // حذف Map داخلی و برگرداندن ساختار نهایی
    return Array.from(typeMap.values()).map(
      ({ groupMap, ...riskType }) => riskType
    );

    // return [
    //   {
    //     name: 'ریسک مشتری',
    //     score: 55,
    //     triggered: 3,
    //     color: '#0070f3',
    //     icon: 'customer',
    //
    //     groups: [
    //       {
    //         name: 'فعالیت اقتصادی',
    //
    //         items: [
    //           {
    //             t: 'میزان ریسک‌پذیری پولشویی ناشی از فعالیت اقتصادی',
    //             w: 100,
    //             on: true,
    //           },
    //         ],
    //       },
    //
    //       {
    //         name: 'مرتبطین اشخاص پر ریسک',
    //
    //         items: [
    //           {
    //             t: 'ارتباط مالکیتی مشتری با اشخاص در لیست پرخطر',
    //             w: 20,
    //             on: true,
    //           },
    //           {
    //             t: 'ارتباط سببی نسبی (خویشاوندی) مشتری با اشخاص لیست پرخطر',
    //             w: 15,
    //           },
    //           {
    //             t: 'ارتباط مدیریتی مشتری با اشخاص لیست پرخطر',
    //             w: 15,
    //           },
    //           {
    //             t: 'ارتباط ضمانتی مشتری با اشخاص لیست پرخطر',
    //             w: 10,
    //           },
    //           {
    //             t: 'ارتباط مالی مشتری با اشخاص لیست پرخطر',
    //             w: 12.5,
    //           },
    //           {
    //             t: 'ارتباط وکالتی مشتری با اشخاص لیست پرخطر',
    //             w: 17.5,
    //           },
    //           {
    //             t: 'مشتری دارای تعریف مشتری مشترک با اشخاص لیست پرخطر',
    //             w: 10,
    //           },
    //         ],
    //       },
    //
    //       {
    //         name: 'احتمال سوء استفاده از هویت',
    //
    //         items: [
    //           {
    //             t: 'شرکت پوسته‌ای',
    //             w: 35,
    //           },
    //           {
    //             t: 'حساب دارای نماینده',
    //             w: 30,
    //           },
    //           {
    //             t: 'ریسک امکان حساب اجاره‌ای',
    //             w: 35,
    //           },
    //         ],
    //       },
    //
    //       {
    //         name: 'سابقه استعلام / ارسال گزارش / اعمال محدودیت',
    //
    //         items: [
    //           {
    //             t: 'سابقه استعلام قضایی / مراجع نظارتی',
    //             w: 12.5,
    //           },
    //           {
    //             t: 'سوابق ارسال گزارشات به نهادهای نظارتی',
    //             w: 30,
    //           },
    //           {
    //             t: 'حضور در لیست‌های پر خطر',
    //             w: 25,
    //             on: true,
    //           },
    //           {
    //             t: 'دارای مسدودی حساب',
    //             w: 17.5,
    //           },
    //           {
    //             t: 'دارای دستورالعمل ویژه',
    //             w: 15,
    //           },
    //         ],
    //       },
    //
    //       {
    //         name: 'نقص اطلاعات',
    //
    //         items: [
    //           {
    //             t: 'ریسک ناشی از نقص اطلاعات اقتصادی',
    //             w: 55,
    //           },
    //           {
    //             t: 'ریسک ناشی از نقص اطلاعات تماسی',
    //             w: 22.5,
    //           },
    //           {
    //             t: 'ریسک ناشی از نقص اطلاعات مکانی',
    //             w: 22.5,
    //           },
    //         ],
    //       },
    //
    //       {
    //         name: 'سن فعالیت اقتصادی',
    //
    //         items: [
    //           {
    //             t: 'میزان ریسک‌پذیری پولشویی ناشی از سن فعالیت اقتصادی',
    //             w: 100,
    //           },
    //         ],
    //       },
    //
    //       {
    //         name: 'هویتی',
    //
    //         items: [
    //           {
    //             t: 'میزان ریسک‌پذیری پولشویی متناسب با نوع شخصیت حقوقی',
    //             w: 22.5,
    //           },
    //           {
    //             t: 'ریسک ناشی از ابطال / عدم اعتبار شناسه هویتی',
    //             w: 22.5,
    //           },
    //           {
    //             t: 'ریسک تابعیت / ملیت شرایط برداشت مشتری حقوقی',
    //             w: 17.5,
    //           },
    //           {
    //             t: 'ریسک تابعیت / ملیت کشورهای پرخطر',
    //             w: 22.5,
    //           },
    //           {
    //             t: 'ریسک ناشی از وضعیت اقامت',
    //             w: 15,
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //
    //   {
    //     name: 'ریسک سابقه خدمت',
    //     score: 30,
    //     triggered: 2,
    //     color: '#8b5cf6',
    //     icon: 'service',
    //
    //     groups: [
    //       {
    //         name: 'خدمات پر ریسک',
    //
    //         items: [
    //           {
    //             t: 'ریسک ارائه خدمات پایه غیرحضوری',
    //             w: 20,
    //           },
    //           {
    //             t: 'ریسک ارائه خدمات ویژه',
    //             w: 47.5,
    //             on: true,
    //           },
    //           {
    //             t: 'ریسک داشتن خدمات نامتعارف',
    //             w: 17.5,
    //           },
    //           {
    //             t: 'ریسک ناشی از داشتن صندوق امانت',
    //             w: 5,
    //           },
    //           {
    //             t: 'ریسک‌های ناشی از تراکنش‌های نقدی',
    //             w: 10,
    //           },
    //         ],
    //       },
    //
    //       {
    //         name: 'رفتار پر ریسک',
    //
    //         items: [
    //           {
    //             t: 'رفتار نامتعارف',
    //             w: 45,
    //           },
    //           {
    //             t: 'ریسک انجام تراکنش‌ها نزدیک به آستانه سقف مقرر به تعداد زیاد',
    //             w: 22.5,
    //             on: true,
    //           },
    //           {
    //             t: 'عدم ثبات طبقه ریسک',
    //             w: 20,
    //           },
    //           {
    //             t: 'مغایرت تعیین سطح فعالیت',
    //             w: 12.5,
    //           },
    //         ],
    //       },
    //
    //       {
    //         name: 'سایر ریسک‌های عملیاتی',
    //
    //         items: [
    //           {
    //             t: 'ریسک‌های ناشی از تسهیلات و تعهدات',
    //             w: 100,
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //
    //   {
    //     name: 'ریسک منطقه',
    //     score: 15,
    //     triggered: 1,
    //     color: '#f59e0b',
    //     icon: 'region',
    //
    //     groups: [
    //       {
    //         name: 'ریسک منطقه',
    //
    //         items: [
    //           {
    //             t: 'تولد / ثبت در محل پر خطر',
    //             w: 17.5,
    //           },
    //           {
    //             t: 'سکونت / اقامت در محل پر خطر',
    //             w: 27.5,
    //             on: true,
    //           },
    //           {
    //             t: 'تعریف مشتری و افتتاح حساب در محل پر خطر',
    //             w: 30,
    //           },
    //           {
    //             t: 'وقوع تراکنش در منطقه پر خطر',
    //             w: 25,
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // ];
  }, [responseData])

  const selected = factors[selectedFactor];

  return {
    selected, factors
  }
}

export default useRiskFactorList;
