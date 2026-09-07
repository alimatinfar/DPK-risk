import React, {useMemo} from 'react';
import Select from "../../../../../components/Form/Select/Select.tsx";
import type {SelectOptionType, SelectProps} from "../../../../../components/Form/Select/select-exports.ts";
import type {SetStateType} from "../../../../../types/SetStateType.ts";
import APIS from "../../../../../request/constances/apis.ts";
import useFetchData from "../../../../../request/hooks/useFetchData.ts";
import getActivePersonData from "../../../utils/getActivePersonData.ts";
import type {EServicePortalSharedCustomerNumberFieldResponseType} from "./index.types.ts";


export type EServicePortalSharedCustomerNumberFieldProps = {
  selectedCustomerNumber: SelectProps['value'];
  setSelectedCustomerNumber: SetStateType<SelectProps['value']>;
}

function EServicePortalSharedCustomerNumberField(
  {selectedCustomerNumber, setSelectedCustomerNumber}: EServicePortalSharedCustomerNumberFieldProps
) {

  const {activePersonData} = getActivePersonData()

  const {
    data, isFetching
  } = useFetchData<EServicePortalSharedCustomerNumberFieldResponseType[]>({
    axiosConfig: {
      url: APIS.GET_SHARE_CUSTOMER_IDS,
      params: {
        SharedCustomerId: activePersonData?.customerId
      }
    }
  })

  const selectOptions: SelectOptionType[] = useMemo(function () {
    if (!data?.data) return []

    return data?.data?.map(item => ({
      id: item?.customerIdStr,
      name: item?.customerIdStr,
    }))
  }, [data])

  return (
    <div className='flex'>
      <Select
        inputProps={{
          label: 'شماره مشتری مشترک',
          hiddenErrorMessage: true,
          isRowLabel: true,
          required: true
        }}
        name='sharedCustomerNumber'
        onSelect={setSelectedCustomerNumber}
        value={selectedCustomerNumber}
        loading={isFetching}
        options={selectOptions}
      />
    </div>
  );
}

export default EServicePortalSharedCustomerNumberField;
