import usePanelBasicInformationPageAddressList from "./usePanelBasicInformationPageAddressList.ts";


function usePanelBasicInformationPageHomeAddressList() {

  const {
    addressList: homeAddressList
  } = usePanelBasicInformationPageAddressList({
    address: 'خيابان شريعتي، کوچه الف', mobile: '09123456789', city: 'تهران', province: 'تهران',
    floor: '3', buildingName: 'ساختمان الف', postalCode: '1234567890',
    unit: '206', postOfficeBox: '021-123456789', buildingNumber: '30', phone: '021-1234567890'
  })

  return {
    homeAddressList
  }
}

export default usePanelBasicInformationPageHomeAddressList;