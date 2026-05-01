import type {DetailInfoSectionProps} from "../../../../components/others/DetailInfoSection";
import {useMemo} from "react";


type Props = {
  postalCode: string;
  province: string;
  city: string;
  address: string;
  buildingNumber: string;
  floor: string;
  unit: string;
  buildingName: string;
  postOfficeBox: string;
  phone: string;
  mobile: string;
}

function usePanelBasicInformationPageAddressList(
  props: Props
) {

  const addressList: DetailInfoSectionProps['infoList'] = useMemo(function () {

    const {
      city, buildingName, buildingNumber, floor, mobile, postalCode, address, province, unit, postOfficeBox, phone
    } = props

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
        label: 'تلفن محل سکونت',
        value: phone,
      },
      {
        label: 'تلفن همراه',
        value: mobile,
      },
    ]
  }, [props])

  return {addressList}
}

export default usePanelBasicInformationPageAddressList;