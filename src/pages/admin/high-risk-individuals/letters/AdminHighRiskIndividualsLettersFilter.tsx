import type {UseFilterReturnProps} from "../../../../components/Form/FilterForm/hooks/useFilter.ts";
import FilterForm from "../../../../components/Form/FilterForm/FilterForm.tsx";
import type {AdminHighRiskIndividualsLettersFilterType} from "./index.types.ts";
import {adminHighRiskIndividualsLettersDefaultFilters} from "./index.constances.tsx";
import LetterNumberField from "../FormFields/LetterNumberField/LetterNumberField.tsx";
import AnnouncingReferenceField from "../FormFields/AnnouncingReferenceField/AnnouncingReferenceField.tsx";
import LetterFromDateField from "../FormFields/LetterFromDateField/LetterFromDateField.tsx";
import LetterToDateField from "../FormFields/LetterToDateField/LetterToDateField.tsx";
import RiskListTypeField from "../FormFields/RiskListTypeField/RiskListTypeField.tsx";


function AdminHighRiskIndividualsLettersFilter(
  {
    filters, setFilters
  }: Pick<UseFilterReturnProps<AdminHighRiskIndividualsLettersFilterType>, 'filters' | 'setFilters'>
) {
  return (
    <FilterForm<AdminHighRiskIndividualsLettersFilterType>
      filters={filters} setFilters={setFilters}
      initialFilterData={adminHighRiskIndividualsLettersDefaultFilters}
    >
      <LetterNumberField />

      <AnnouncingReferenceField />

      <LetterFromDateField />

      <LetterToDateField />

      <RiskListTypeField notRequired />
    </FilterForm>
  );
}

export default AdminHighRiskIndividualsLettersFilter;
