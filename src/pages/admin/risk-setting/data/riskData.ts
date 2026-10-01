import type { RiskTree } from '../index.types.ts';

export const riskData: RiskTree = [
  {
    id: 'indicator-type-region',
    title: 'منطقه',
    weight: 20,

    groups: [
      {
        id: 'group-region-risk',
        title: 'ریسک منطقه',
        weight: 100,

        indicators: [
          {
            id: 'indicator-birth-registration-high-risk',
            title: 'تولد/ ثبت در محل پر خطر',
            weight: 55.55,

            subIndicators: [
              {
                id: 'sub-birth-registration',
                title: 'محل تولد / ثبت',
                weight: 2,
              },
              {
                id: 'sub-birth-registration-high-risk',
                title: 'محل تولد / ثبت مشتری ايران/شهر پرخطر',
                weight: 3,
              },
            ],
          },

          {
            id: 'indicator-residence-high-risk',
            title: 'سکونت/ اقامت در محل پر خطر',
            weight: 27.5,

            subIndicators: [
              {
                id: 'sub-residence',
                title: 'محل سکونت / اقامت',
                weight: 2,
              },
              {
                id: 'sub-residence-high-risk',
                title:
                  'محل سکونت/ اقامت ايران/دفتر مرکزی / محل فعالیت شهر پرخطر',
                weight: 3,
              },
              {
                id: 'sub-residence-foreign-high-risk',
                title: 'محل سکونت/ اقامت كشور خارجي پر خطر',
                weight: 3,
              },
            ],
          },

          {
            id: 'indicator-customer-definition-high-risk',
            title: 'تعریف مشتری و افتتاح حساب در محل پرخطر',
            weight: 30,

            subIndicators: [
              {
                id: 'sub-customer-definition-branch',
                title: 'شعبه تعریف مشتری یا افتتاح حساب',
                weight: 3,
              },
              {
                id: 'sub-customer-definition-free-zone',
                title:
                  'شعبه تعریف مشتری یا افتتاح حساب در منطقه آزاد تجاری',
                weight: 2,
              },
            ],
          },

          {
            id: 'indicator-transaction-high-risk-region',
            title: 'وقوع تراکنش در منطقه پرخطر',
            weight: 25,

            subIndicators: [
              {
                id: 'sub-transaction-origin',
                title: 'مبدا تراکنش',
                weight: 3,
              },
              {
                id: 'sub-transaction-destination',
                title: 'مقصد تراکنش',
                weight: 3,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'indicator-type-customer',
    title: 'مشتری',
    weight: 50,

    groups: [
      {
        id: 'group-economic-activity',
        title: 'فعالیت اقتصادی',
        weight: 35,

        indicators: [
          {
            id: 'indicator-economic-activity-risk',
            title: 'میزان ریسک‌پذیری پولشویی ناشی از فعالیت اقتصادی',
            weight: 100,

            subIndicators: [
              {
                id: 'sub-unemployed',
                title: 'فاقد شغل',
                weight: 0,
              },
              {
                id: 'sub-retired',
                title: 'فاقد شغل - بازنشسته/ مستمری بگیر',
                weight: 0,
              },
              {
                id: 'sub-support-pension',
                title: 'فاقد شغل - مستمری بگیر سازمان حمایتی',
                weight: 0,
              },
              {
                id: 'sub-student',
                title: 'فاقد شغل - محصل / دانشجو',
                weight: 0,
              },
              {
                id: 'sub-housewife',
                title: 'فاقد شغل - خانه دار',
                weight: 0,
              },
              {
                id: 'sub-high-risk-job',
                title: 'مشاغل پرخطر/ شغل',
                weight: 3,
              },
              {
                id: 'sub-medium-risk-job',
                title: 'مشاغل پرخطر/ شغل - مشاغل با ریسک متوسط',
                weight: 2,
              },
              {
                id: 'sub-low-risk-job',
                title: 'مشاغل پرخطر/ شغل - مشاغل کم خطر',
                weight: 1,
              },
              {
                id: 'sub-high-risk-business',
                title: 'حوزه های کاری پرخطر',
                weight: 3,
              },
              {
                id: 'sub-employer-high-risk-business',
                title: 'حوزه های کاری کارفرما پرخطر',
                weight: 2,
              },
              {
                id: 'sub-legal-entity-inactive',
                title: 'فاقد فعالیت اقتصادی شخصیت حقوقی',
                weight: 3,
              },
            ],
          },
        ],
      },

      {
        id: 'group-high-risk-related-persons',
        title: 'مرتبطین اشخاص پر ریسک',
        weight: 17.5,

        indicators: [
          {
            id: 'indicator-ownership-relationship',
            title: 'ارتباط مالکیتی مشتری با اشخاص در لیست پرخطر',
            weight: 20,

            subIndicators: [
              {
                id: 'sub-ownership-high-risk',
                title:
                  'لیست قمار / اشخاص پرخطر / لیست سیاه / اشخاص تحریمی / اشخاص مظنون / اشخاص تحت مراقبت',
                weight: 3,
              },
            ],
          },

          {
            id: 'indicator-relative-relationship',
            title:
              'ارتباط سببی نسبی (خویشاوندی) مشتری با اشخاص لیست پرخطر',
            weight: 15,

            subIndicators: [
              {
                id: 'sub-relative-high-risk',
                title:
                  'لیست قمار / اشخاص پرخطر / لیست سیاه / اشخاص تحریمی / اشخاص مظنون / اشخاص تحت مراقبت',
                weight: 3,
              },
            ],
          },

          {
            id: 'indicator-management-relationship',
            title: 'ارتباط مدیریتی مشتری با اشخاص لیست پرخطر',
            weight: 15,

            subIndicators: [
              {
                id: 'sub-management-high-risk',
                title:
                  'لیست قمار / اشخاص پرخطر / لیست سیاه / اشخاص تحریمی / اشخاص مظنون / اشخاص تحت مراقبت',
                weight: 3,
              },
            ],
          },

          {
            id: 'indicator-guarantee-relationship',
            title: 'ارتباط ضمانتی مشتری با اشخاص لیست پرخطر',
            weight: 10,

            subIndicators: [
              {
                id: 'sub-guarantee-high-risk',
                title:
                  'لیست قمار / اشخاص پرخطر / لیست سیاه / اشخاص تحریمی / اشخاص مظنون / اشخاص تحت مراقبت',
                weight: 2,
              },
            ],
          },

          {
            id: 'indicator-financial-relationship',
            title: 'ارتباط مالی مشتری با اشخاص لیست پرخطر',
            weight: 12.5,

            subIndicators: [
              {
                id: 'sub-financial-high-risk',
                title:
                  'لیست قمار / اشخاص پرخطر / لیست سیاه / اشخاص تحریمی / اشخاص مظنون / اشخاص تحت مراقبت',
                weight: 3,
              },
            ],
          },

          {
            id: 'indicator-attorney-relationship',
            title: 'ارتباط وکالتی مشتری با اشخاص لیست پرخطر',
            weight: 17.5,

            subIndicators: [
              {
                id: 'sub-attorney-high-risk',
                title:
                  'لیست قمار / اشخاص پرخطر / لیست سیاه / اشخاص تحریمی / اشخاص مظنون / اشخاص تحت مراقبت',
                weight: 3,
              },
            ],
          },

          {
            id: 'indicator-joint-customer-definition',
            title: 'مشتری دارای تعریف مشتری مشترک با اشخاص لیست پرخطر',
            weight: 10,

            subIndicators: [
              {
                id: 'sub-joint-customer-high-risk',
                title:
                  'لیست قمار / اشخاص پرخطر / لیست سیاه / اشخاص تحریمی / اشخاص مظنون / اشخاص تحت مراقبت',
                weight: 3,
              },
            ],
          },
        ],
      },

      {
        id: 'group-identity-abuse',
        title: 'احتمال سو استفاده از هویت',
        weight: 10,

        indicators: [
          {
            id: 'indicator-shell-company',
            title: 'شرکت پوسته ای',
            weight: 35,

            subIndicators: [
              {
                id: 'sub-shell-company',
                title: 'مصادیق شرکت پوسته ای',
                weight: 0,
              },
            ],
          },

          {
            id: 'indicator-account-representative',
            title: 'حساب دارای نماینده',
            weight: 30,

            subIndicators: [
              {
                id: 'sub-account-attorney',
                title: 'حساب دارای وکیل/ نماینده',
                weight: 3,
              },
            ],
          },

          {
            id: 'indicator-rented-account-risk',
            title: 'ریسک امکان حساب اجاره ای',
            weight: 35,

            subIndicators: [
              {
                id: 'sub-shared-mobile',
                title: 'داشتن شماره تلفن همراه مشترک',
                weight: 3,
              },
              {
                id: 'sub-more-than-two-signatories',
                title: 'امضا دار حساب بیش از 2 شخص',
                weight: 2,
              },
              {
                id: 'sub-more-than-ten-signatories',
                title: 'امضا دار حساب بیش از 2 شخص',
                weight: 3,
              },
              {
                id: 'sub-shared-address-individual',
                title: 'آدرس مشترک ثبت شده برای مشتری',
                weight: 2,
              },
              {
                id: 'sub-shared-address-legal',
                title: 'آدرس مشترک ثبت شده برای مشتری',
                weight: 3,
              },
            ],
          },
        ],
      },

      {
        id: 'group-inquiry-history',
        title:
          'مشتریان دارای سابقه استعلام/ ارسال گزارش/ اعمال محدودیت',
        weight: 10,

        indicators: [
          {
            id: 'indicator-judicial-inquiry',
            title: 'سابقه استعلام قضایی/ مراجع نظارتی',
            weight: 12.5,

            subIndicators: [
              {
                id: 'sub-fiu-inquiry',
                title:
                  'مشتری دارای سابقه استعلام از FIU / بانک مرکزی/ مراجع قضایی/ ضابطین',
                weight: 3,
              },
            ],
          },

          {
            id: 'indicator-report-history',
            title: 'سوابق ارسال گزارشات به نهادهای نظارتی',
            weight: 30,

            subIndicators: [
              {
                id: 'sub-suspicious-report-2-3',
                title:
                  'مشتری دارای سابقه ثبت معاملات مشکوک از طریق شعبه - بین 2 تا 3 مرتبه',
                weight: 2,
              },
              {
                id: 'sub-suspicious-report-more-3',
                title:
                  'مشتری دارای سابقه ثبت معاملات مشکوک از طریق شعبه - بیش از 3 بار',
                weight: 3,
              },
              {
                id: 'sub-fiu-report',
                title:
                  'مشتری دارای سابقه ارسال گزارش معاملات مشکوک از طریق اداره مبارزه با پولشویی به FIU',
                weight: 3,
              },
            ],
          },

          {
            id: 'indicator-high-risk-lists',
            title: 'حضور در لیست های پر خطر',
            weight: 25,

            subIndicators: [
              {
                id: 'sub-gambling-list',
                title: 'مشتری موجود در لیست قمار بانک مرکزی (آرش)',
                weight: 3,
              },
              {
                id: 'sub-financial-intelligence-high-risk',
                title:
                  'مشتری موجود در لیست اشخاص پر خطر مرکز اطلاعات مالی',
                weight: 3,
              },
              {
                id: 'sub-black-list',
                title:
                  'مشتری موجود در لیست سیاه اداره مبارزه با پولشویی',
                weight: 3,
              },
              {
                id: 'sub-sanctions-list',
                title: 'مشتری موجود در لیست اشخاص تحریمی',
                weight: 3,
              },
              {
                id: 'sub-suspected-list',
                title: 'مشتری موجود در لیست اشخاص مظنون',
                weight: 3,
              },
              {
                id: 'sub-monitored-list',
                title: 'مشتری موجود در لیست اشخاص تحت مراقبت',
                weight: 3,
              },
            ],
          },

          {
            id: 'indicator-account-block',
            title: 'دارای مسدودی حساب',
            weight: 17.5,

            subIndicators: [
              {
                id: 'sub-account-block',
                title: 'مشتری دارای / سابقه مسدودی حساب',
                weight: 3,
              },
            ],
          },

          {
            id: 'indicator-special-instruction',
            title: 'دارای دستورالعمل ویژه',
            weight: 15,

            subIndicators: [
              {
                id: 'sub-special-instruction',
                title: 'مشتری دارای / سابقه دستورالعمل ویژه',
                weight: 3,
              },
            ],
          },
        ],
      },

      {
        id: 'group-information-deficiency',
        title: 'نقص اطلاعات',
        weight: 10,

        indicators: [
          {
            id: 'indicator-economic-information-deficiency',
            title: 'ریسک ناشی از نقص اطلاعات اقتصادی',
            weight: 55,

            subIndicators: [
              {
                id: 'sub-other-job',
                title: 'فیلد شغل سایر',
                weight: 3,
              },
            ],
          },

          {
            id: 'indicator-contact-information-deficiency',
            title: 'ریسک ناشی از نقص اطلاعات تماسی',
            weight: 22.5,

            subIndicators: [
              {
                id: 'sub-empty-phone',
                title: 'خالی بودن/ نامعتبر بودن فیلد شماره تماس',
                weight: 2,
              },
              {
                id: 'sub-invalid-phone',
                title: 'شماره تلفن مشتری دارای الگوی نامعتبر',
                weight: 2,
              },
            ],
          },

          {
            id: 'indicator-location-information-deficiency',
            title: 'ریسک ناشی از نقص اطلاعات مکانی',
            weight: 22.5,

            subIndicators: [
              {
                id: 'sub-invalid-postal-code',
                title: 'کد پستی نامعتبر',
                weight: 2,
              },
              {
                id: 'sub-invalid-postal-code-pattern',
                title: ' الگوی کدپستی نامعتبر',
                weight: 2,
              },
            ],
          },
        ],
      },

      {
        id: 'group-economic-activity-age',
        title: 'سن فعالیت اقتصادی',
        weight: 7.5,

        indicators: [
          {
            id: 'indicator-economic-age-risk',
            title: 'میزان ریسک‌پذیری پولشویی ناشی از سن فعالیت اقتصادی',
            weight: 100,

            subIndicators: [
              {
                id: 'sub-age-under-12',
                title: 'سن زیر 12 سال / محجور بالای 18 سال',
                weight: 0,
              },
              {
                id: 'sub-age-12-18',
                title: 'سن بین 12 تا 18 سال',
                weight: 0,
              },
              {
                id: 'sub-age-over-70',
                title: 'سن بالای 70',
                weight: 2,
              },
              {
                id: 'sub-establishment-less-one-year',
                title: 'مدت تاسیس - زیر یک سال تاسیس',
                weight: 3,
              },
            ],
          },
        ],
      },

      {
        id: 'group-identity',
        title: 'هویتی',
        weight: 10,

        indicators: [
          {
            id: 'indicator-legal-personality',
            title:
              'میزان ریسک‌پذیری پولشویی متناسب با نوع شخصیت حقوقی',
            weight: 22.5,

            subIndicators: [
              {
                id: 'sub-limited-liability',
                title: 'نوع شخصیت حقوقی مسئولیت محدود',
                weight: 3,
              },
              {
                id: 'sub-private-joint-stock',
                title: 'نوع شخصیت حقوقی سهامی خاص',
                weight: 2,
              },
              {
                id: 'sub-general-partnership',
                title: 'نوع شخصیت حقوقی تضامنی',
                weight: 2,
              },
            ],
          },

          {
            id: 'indicator-identity-invalidity',
            title: 'ریسک ناشی از ابطال / عدم اعتبار شناسه هویتی',
            weight: 22.5,

            subIndicators: [
              {
                id: 'sub-deceased',
                title: 'فوتی',
                weight: 2,
              },
              {
                id: 'sub-suspended-invalid-cancelled',
                title: 'تعلیق/ نامعتبر/ ابطال',
                weight: 2,
              },
            ],
          },

          {
            id: 'indicator-legal-nationality',
            title:
              'ریسک تابعیت/ ملیت شرایط برداشت مشتری حقوقی',
            weight: 17.5,

            subIndicators: [
              {
                id: 'sub-legal-customer-with-foreign-signatory',
                title: 'شرایط برداشت مشتری حقوقی',
                weight: 3,
              },
            ],
          },

          {
            id: 'indicator-high-risk-nationality',
            title: 'ریسک تابعیت/ ملیت کشورهای پرخطر',
            weight: 22.5,

            subIndicators: [
              {
                id: 'sub-high-risk-nationality',
                title: 'تابعیت / ملیت جز لیست کشورهای پرخطر',
                weight: 2,
              },
              {
                id: 'sub-high-risk-birth-nationality',
                title:
                  'تابعیت / ملیت جز لیست کشورهای پرخطر - کشور محل تولد یا ملیت',
                weight: 3,
              },
            ],
          },

          {
            id: 'indicator-residency-status',
            title: 'ریسک ناشی از وضعیت اقامت',
            weight: 15,

            subIndicators: [
              {
                id: 'sub-resident-customer',
                title: 'مشتری مقیم',
                weight: 2,
              },
              {
                id: 'sub-non-resident-customer',
                title: 'مشتری غیر مقیم',
                weight: 3,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'indicator-type-service-history',
    title: 'سابقه خدمت',
    weight: 30,

    groups: [
      {
        id: 'group-high-risk-services',
        title: 'خدمات پر ریسک',
        weight: 40,

        indicators: [
          {
            id: 'indicator-non-face-to-face-services',
            title: 'ریسک ارائه خدمات پایه غیرحضوری',
            weight: 20,

            subIndicators: [
              {
                id: 'sub-group-account-opening',
                title: 'افتتاح حساب گروهی',
                weight: 3,
              },
              {
                id: 'sub-sepino',
                title: 'سپینو',
                weight: 2,
              },
              {
                id: 'sub-systemic',
                title: 'سیستمی',
                weight: 3,
              },
            ],
          },

          {
            id: 'indicator-special-services',
            title: 'ریسک ارائه خدمات ویژه',
            weight: 47.5,

            subIndicators: [
              {
                id: 'sub-collective-deposit',
                title: 'مشتری دارای محصول واریز جمعی',
                weight: 2,
              },
              {
                id: 'sub-moj',
                title: 'مشتری دارای محصول موج',
                weight: 2,
              },
              {
                id: 'sub-open-banking',
                title: 'مشتری دارای خدمات بانکداری باز',
                weight: 3,
              },
              {
                id: 'sub-internet-banking-gold-silver',
                title: 'مشتری دارای بانکداری اینترنتی گلد و سیلور',
                weight: 2,
              },
            ],
          },

          {
            id: 'indicator-unusual-services',
            title: 'ریسک داشتن خدمات نامتعارف',
            weight: 17.5,

            subIndicators: [
              {
                id: 'sub-many-accounts-6-10',
                title: 'دارای تعداد زیاد حساب',
                weight: 2,
              },
              {
                id: 'sub-many-accounts-more-10',
                title: 'دارای تعداد زیاد حساب',
                weight: 3,
              },
              {
                id: 'sub-many-joint-customer-definitions',
                title: 'دارای تعداد زیاد تعریف مشتری مشترک',
                weight: 3,
              },
            ],
          },

          {
            id: 'indicator-safe-deposit',
            title: 'ریسک ناشی از داشتن صندوق امانت',
            weight: 5,

            subIndicators: [
              {
                id: 'sub-safe-deposit',
                title: 'داشتن صندوق امانت',
                weight: 2,
              },
              {
                id: 'sub-frequent-safe-deposit',
                title: 'مراجعات مکرر به صندوق امانت',
                weight: 3,
              },
            ],
          },

          {
            id: 'indicator-cash-transactions',
            title: 'ریسک های ناشی از تراکنش های نقدی',
            weight: 10,

            subIndicators: [
              {
                id: 'sub-many-bank-cards',
                title: 'دارای تعداد زیاد بن کارت',
                weight: 3,
              },
            ],
          },
        ],
      },

      {
        id: 'group-high-risk-behavior',
        title: 'رفتار پر ریسک',
        weight: 45,

        indicators: [
          {
            id: 'indicator-unusual-behavior',
            title: 'رفتار نامتعارف',
            weight: 45,

            subIndicators: [
              {
                id: 'sub-early-closed-term-deposit',
                title: 'سپرده مدت دار بسته شده پیش از سررسید',
                weight: 3,
              },
              {
                id: 'sub-multiple-account-opening',
                title: 'تعدد افتتاح حساب',
                weight: 3,
              },
              {
                id: 'sub-central-bank-output',
                title:
                  'خروجی قواعد بانک مرکزی و مرکز اطلاعات مالی',
                weight: 3,
              },
            ],
          },

          {
            id: 'indicator-threshold-transactions',
            title:
              'ریسک انجام تراکنش ها نزدیک به آستانه سقف مقرر به تعداد زیاد',
            weight: 22.5,

            subIndicators: [
              {
                id: 'sub-cash-withdrawal',
                title: 'تراکنش برداشت نقدی',
                weight: 3,
              },
              {
                id: 'sub-cash-deposit',
                title: 'تراکنش واریز نقدی',
                weight: 3,
              },
            ],
          },

          {
            id: 'indicator-risk-level-instability',
            title: 'عدم ثبات طبقه ریسک',
            weight: 20,

            subIndicators: [
              {
                id: 'sub-risk-level-change',
                title: 'دفعات تغییر طبقه ریسک مشتری',
                weight: 2,
              },
            ],
          },

          {
            id: 'indicator-activity-level-mismatch',
            title: 'مغایرت تعیین سطح فعالیت',
            weight: 12.5,

            subIndicators: [
              {
                id: 'sub-activity-mismatch-1-2',
                title:
                  'رفتار مالی مغایر با سطح فعالیت - مغایرت بین یک تا 2 برابری',
                weight: 2,
              },
              {
                id: 'sub-activity-mismatch-more-2',
                title:
                  'رفتار مالی مغایر با سطح فعالیت - مغایرت بیشتر از دو برابری',
                weight: 3,
              },
            ],
          },
        ],
      },

      {
        id: 'group-other-operational-risks',
        title: 'سایر ریسک های عملیاتی',
        weight: 15,

        indicators: [
          {
            id: 'indicator-facilities-commitments',
            title: 'ریسک های ناشی از تسهیلات و تعهدات',
            weight: 100,

            subIndicators: [
              {
                id: 'sub-early-settlement',
                title: 'تسویه زودتر از موعد',
                weight: 3,
              },
              {
                id: 'sub-overdue-facility-debt',
                title: 'بدهی تسهیلاتی - سررسید گذشته',
                weight: 2,
              },
              {
                id: 'sub-doubtful-facility-debt',
                title: 'بدهی تسهیلاتی - مشکوک الوصول',
                weight: 3,
              },
            ],
          },
        ],
      },
    ],
  },
];
