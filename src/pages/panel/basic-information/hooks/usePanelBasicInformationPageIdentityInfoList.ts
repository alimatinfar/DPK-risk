import type {DetailInfoSectionProps} from "../../../../components/others/DetailInfoSection";


function usePanelBasicInformationPageIdentityInfoList() {

  const identityInfoList: DetailInfoSectionProps['infoList'] = [
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
    {
      label: 'جنسیت',
      value: 'مرد',
    },
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
    {
      label: 'تاریخ تولد',
      value: '۱۳۶۷/۰۵/۱۴',
    },
    {
      label: 'کشور محل تولد',
      value: 'ایران',
    },
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
      label: 'رشته تحصیلی',
      value: 'مهندسی صنایع',
    },
    {
      label: 'تحصیلات',
      value: 'کارشناسی ارشد',
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

  return {
    identityInfoList
  }
}

export default usePanelBasicInformationPageIdentityInfoList;