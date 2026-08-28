import FilterForm from "../../../../components/Form/FilterForm/FilterForm.tsx";
import type {AdminHighRiskIndividualsFilterType} from "./index.types.ts";
import type {UseFilterReturnProps} from "../../../../components/Form/FilterForm/hooks/useFilter.ts";
import {adminHighRiskIndividualsDefaultFilters} from "./index.constances.ts";
import NationalCodeField from "../FormFields/NationalCodeField/NationalCodeField.tsx";
import FirstNameField from "../FormFields/FirstNameField/FirstNameField.tsx";
import LastNameField from "../FormFields/LastNameField/LastNameField.tsx";

function AdminHighRiskIndividualsFilter(
  {filters, setFilters}: Pick<UseFilterReturnProps<AdminHighRiskIndividualsFilterType>, 'filters' | 'setFilters'>
) {
  return (
    <FilterForm<AdminHighRiskIndividualsFilterType>
      filters={filters} setFilters={setFilters}
      initialFilterData={adminHighRiskIndividualsDefaultFilters}
    >
      <NationalCodeField removeValidations />

      <FirstNameField />

      <LastNameField />
    </FilterForm>
  );
}

export default AdminHighRiskIndividualsFilter;
