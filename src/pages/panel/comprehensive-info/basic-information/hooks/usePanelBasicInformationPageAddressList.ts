import type {DetailInfoSectionProps} from "../../../../../components/others/DetailInfo/DetailInfoSection";
import {useMemo} from "react";


type Props = {
  postalCode: string | number;
  province: string | number;
  city: string | number;
  address: string | number;
  buildingNumber: string | number;
  floor: string | number;
  unit: string | number;
  buildingName: string | number;
  postOfficeBox: string | number;
  phone: string | number;
  disabled?: boolean;
  phoneLabel?: string;
}

function usePanelBasicInformationPageAddressList(
  props: Props
) {

  const addressList: DetailInfoSectionProps['infoList'] = useMemo(function () {

    const {
      city, buildingName, buildingNumber, floor, postalCode, address, province, unit, postOfficeBox, phone, disabled,
      phoneLabel
    } = props

    if (disabled) return []

    return [
      {
        label: 'کدپستی',
        value: postalCode,
      },
      {
        label: 'استان',
        value: province,
      },
      {
        label: 'شهر/شهرستان/بخش/دهستان',
        value: city,
        column: 3
      },
      {
        label: 'آدرس',
        value: address,
        column: 5
      },
      {
        label: 'پلاک',
        value: buildingNumber,
      },
      {
        label: 'طبقه',
        value: floor,
      },
      {
        label: 'واحد',
        value: unit,
      },
      {
        label: 'نام ساختمان',
        value: buildingName,
      },
      {
        label: 'صندوق پستی',
        value: postOfficeBox,
      },
      {
        label: phoneLabel || 'تلفن',
        value: phone,
      },
    ]
  }, [props])

  return {addressList}
}

export default usePanelBasicInformationPageAddressList;
