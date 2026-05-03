import type {DetailInfoSectionProps} from "../../../../components/others/DetailInfoSection";
import {useMemo} from "react";
import getActivePersonDataType from "../../utils/getActivePersonDataType.ts";

function usePanelBasicInformationPageIdentityInfoListNatural() {

  const {
    isLegal, isForeignCitizen
  } = getActivePersonDataType()

  const naturalOrForeignCitizenInfoList: DetailInfoSectionProps['infoList'] = useMemo(function () {
    if (isLegal) return []

    return [
      {
        label: 'نام',
        value: 'محمدرضا',
      },
      {
        label: 'نام خانوادگی',
        value: 'احمدی'
      },
      {
        label: 'نام پدر',
        value: 'علی',
      },

      ...isForeignCitizen ? [{
        label: 'نام جد',
        value: 'بهرام',
      }] : [],

      {
        label: 'جنسیت',
        value: 'مرد',
      },
      ...isForeignCitizen ? [
        {
          label: 'شناسه فراگیر',
          value: '1234567890',
        },
        {
          label: 'نوع مدرک شناسایی',
          value: '1234567890',
        },
        {
          label: 'شناسه مدرک شناسایی',
          value: '1234567890',
        },
        {
          label: 'تاریخ صدور مدرک شناسایی',
          value: '1234567890',
        },
        {
          label: 'تاریخ انقضا مدرک شناسایی',
          value: '1234567890',
        },
        {
          label: 'نوع گذرنامه',
          value: '1234567890',
        },
        {
          label: 'شماره پروانه اقامت/روادید',
          value: '1234567890',
        },
        {
          label: 'تاریخ صدور پروانه اقامت/روادید',
          value: '1234567890',
        },
        {
          label: 'تاریخ انقضا پروانه اقامت/روادید',
          value: '1234567890',
        },
      ] : [
        {
          label: 'کدملی',
          value: '1234567890',
        },
        {
          label: 'شماره شناسنامه',
          value: '1234567890',
        },
        {
          label: 'سری و سریال شناسنامه',
          value: ' الف/۱۲۳۴۵۶',
        },
      ],

      {
        label: 'تاریخ تولد',
        value: '۱۳۶۷/۰۵/۱۴',
      },
      {
        label: 'کشور محل تولد',
        value: 'ایران',
      },
      {
        label: 'شهر محل تولد',
        value: 'تهران',
      },

      ...isForeignCitizen ? [
        {
          label: 'ملیت',
          value: 'افغانستانی',
        },
        {
          label: 'تابعیت',
          value: 'افغانستان',
        },
        {
          label: 'تاریخ آخرین ورود به کشور',
          value: '2024-12-01',
        },
      ] : [],

      {
        label: 'وضعیت حیات',
        value: 'زنده',
      },
      {
        label: 'تاریخ وفات',
        value: '',
      },
      {
        label: 'سن',
        value: '38',
      },
      {
        label: 'تحصیلات',
        value: 'کارشناسی ارشد',
      },
      {
        label: 'رشته تحصیلی',
        value: 'مهندسی صنایع',
      },
      {
        label: 'وضعیت تاهل',
        value: 'متاهل',
      },
      {
        label: 'تاریخ تغییر وضعیت تاهل',
        value: '۱۳۹۲/۰۶/۲۱',
      },
      {
        label: 'تلفن همراه',
        value: '09191122233',
      },
    ]
  }, [isLegal, isForeignCitizen])

  return {
    naturalOrForeignCitizenInfoList
  }
}

export default usePanelBasicInformationPageIdentityInfoListNatural;