import type {AdminHighRiskIndividualsFilterType} from "./index.types.ts";
import type {UseFilterReturnProps} from "../../../../components/Form/FilterForm/hooks/useFilter.ts";
import useFilterForm from "../../../../components/Form/FilterForm/hooks/useFilterForm.ts";
import {adminHighRiskIndividualsDefaultFilters} from "./index.constances.ts";
import RiskListTypeField from "../FormFields/RiskListTypeField/RiskListTypeField.tsx";
import NationalCodeField from "../FormFields/NationalCodeField/NationalCodeField.tsx";
import FirstNameField from "../FormFields/FirstNameField/FirstNameField.tsx";
import LastNameField from "../FormFields/LastNameField/LastNameField.tsx";
import SearchFormWrapper from "../../../../components/Form/FormLayout/SearchFormWrapper.tsx";

function AdminHighRiskIndividualsFilter(
  {filters, setFilters}: Pick<UseFilterReturnProps<AdminHighRiskIndividualsFilterType>, 'filters' | 'setFilters'>
) {

  const {
    onSubmit, formMethods
  } = useFilterForm<AdminHighRiskIndividualsFilterType>({
    filters, setFilters, initialFilterData: adminHighRiskIndividualsDefaultFilters, hasNotModal: true
  })

  return (
    <SearchFormWrapper
      formMethods={formMethods} onSubmit={onSubmit}
    >
      <RiskListTypeField notRequired />

      <NationalCodeField removeValidations />

      <FirstNameField />

      <LastNameField />
    </SearchFormWrapper>
  );
}

export default AdminHighRiskIndividualsFilter;
