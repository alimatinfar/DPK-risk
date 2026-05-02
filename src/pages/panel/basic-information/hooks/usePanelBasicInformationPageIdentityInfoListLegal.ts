import {useMemo} from 'react';
import getActivePersonDataType from "../../utils/getActivePersonDataType.ts";
import type {DetailInfoSectionProps} from "../../../../components/others/DetailInfoSection";

function usePanelBasicInformationPageIdentityInfoListLegal() {

  const {
    isLegal, isForeignCitizen
  } = getActivePersonDataType()

  const legalInfoList: DetailInfoSectionProps['infoList'] = useMemo(function () {
    if (!isLegal) return []

    return [
      {
        label: 'نام شخصیت حقوقی',
        value: 'محمدرضا',
      },
      {
        label: 'نام تجاری',
        value: 'توسن سیستم',
      },
      {
        label: 'نام اختصاری',
        value: 'توسن',
      },
      {
        label: 'نوع شخصیت حقوقی',
        value: 'شرکت سهامی خاص',
      },
      {
        label: 'تاریخ تاسیس',
        value: '2010-06-15',
      },
      {
        label: 'شناسه ملی',
        value: '10320198765',
      },
      {
        label: 'وضعیت شناسه ملی',
        value: 'معتبر',
      },
      {
        label: 'وضعیت شخصیت حقوقی',
        value: 'فعال',
      },
      {
        label: 'شماره مجوز',
        value: '12345/ت/۱۰',
      },
      {
        label: 'تاریخ مجوز',
        value: '2009-12-01',
      },
      {
        label: 'استان محل ثبت',
        value: 'تهران',
      },
      {
        label: 'شهر/شهرستان محل ثبت',
        value: 'تهران',
      },
      {
        label: 'مرجع ثبت کننده',
        value: 'اداره ثبت شرکت‌های تهران',
      },
      {
        label: 'شماره ثبت',
        value: '456789',
      },
      {
        label: 'تاریخ ثبت',
        value: '2010-07-20',
      },
      {
        label: 'واحد ثبتی',
        value: 'تهران - واحد ۱',
      },
      {
        label: 'وضعیت نماد اعتماد الکترونیکی',
        value: 'فعال',
      },
      {
        label: 'تاریخ انحلال',
        value: '',
      },
      {
        label: 'تاریخ ختم تصفیه',
        value: '',
      },
      {
        label: 'تاریخ تعلیق',
        value: '',
      },
      {
        label: 'پست الکترونیکی',
        value: 'info@tosansystem.ir',
      },
      {
        label: 'وبگاه',
        value: 'www.tosansystem.ir',
      },
    ]
  }, [isLegal])

  return {
    legalInfoList
  }
}

export default usePanelBasicInformationPageIdentityInfoListLegal;