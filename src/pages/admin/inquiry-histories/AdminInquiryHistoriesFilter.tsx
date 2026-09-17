import FilterForm from "../../../components/Form/FilterForm/FilterForm.tsx";
import type {UseFilterReturnProps} from "../../../components/Form/FilterForm/hooks/useFilter.ts";
import {adminInquiryHistoriesDefaultFilters} from "./index.constances.tsx";
import type {AdminInquiryHistoriesFilterType} from "./index.types.ts";
import LetterNumberField from "../high-risk-individuals/FormFields/LetterNumberField/LetterNumberField.tsx";
import AnnouncingReferenceField
  from "../high-risk-individuals/FormFields/AnnouncingReferenceField/AnnouncingReferenceField.tsx";
import NationalCodeField from "../high-risk-individuals/FormFields/NationalCodeField/NationalCodeField.tsx";
import LetterFromDateField from "../high-risk-individuals/FormFields/LetterFromDateField/LetterFromDateField.tsx";
import LetterToDateField from "../high-risk-individuals/FormFields/LetterToDateField/LetterToDateField.tsx";
import RequestReasonField from "./FormFields/RequestReasonField/RequestReasonField.tsx";
import ResponseSubmissionStatusField
  from "./FormFields/ResponseSubmissionStatusField/ResponseSubmissionStatusField.tsx";
import FirstNameField from "../high-risk-individuals/FormFields/FirstNameField/FirstNameField.tsx";
import LastNameField from "../high-risk-individuals/FormFields/LastNameField/LastNameField.tsx";


function AdminInquiryHistoriesFilter(
  {
    filters, setFilters
  }: Pick<UseFilterReturnProps<AdminInquiryHistoriesFilterType>, 'filters' | 'setFilters'>
) {
  return (
    <FilterForm<AdminInquiryHistoriesFilterType>
      filters={filters} setFilters={setFilters}
      initialFilterData={adminInquiryHistoriesDefaultFilters}
    >
      {/*<InquiryNumberField />*/}

      <AnnouncingReferenceField customLabel='مرجع درخواست کننده' />

      <LetterNumberField />

      <RequestReasonField />

      <NationalCodeField removeValidations />

      <FirstNameField />

      <LastNameField />

      <LetterFromDateField />

      <LetterToDateField />

      <ResponseSubmissionStatusField />
    </FilterForm>
  );
}

export default AdminInquiryHistoriesFilter;
