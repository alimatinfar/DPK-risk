import React from 'react';
import Select from "../../../../../components/Form/Select/Select.tsx";
import {PANEL_INDIVIDUAL_E_SERVICE_PORTAL_SHARED_CUSTOMER_NUMBER_OPTIONS} from "./index.constances.tsx";
import type {SelectProps} from "../../../../../components/Form/Select/select-exports.ts";
import type {SetStateType} from "../../../../../types/SetStateType.ts";


export type EServicePortalSharedCustomerNumberFieldProps = {
  selectedCustomerNumber: SelectProps['value'];
  setSelectedCustomerNumber: SetStateType<SelectProps['value']>;
}

function EServicePortalSharedCustomerNumberField(
  {selectedCustomerNumber, setSelectedCustomerNumber}: EServicePortalSharedCustomerNumberFieldProps
) {
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
        options={PANEL_INDIVIDUAL_E_SERVICE_PORTAL_SHARED_CUSTOMER_NUMBER_OPTIONS}
      />
    </div>
  );
}

export default EServicePortalSharedCustomerNumberField;
