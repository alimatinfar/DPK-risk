import type {AdminHighRiskIndividualsFilterType} from "./index.types.ts";
import type {UseFilterReturnProps} from "../../../../components/Form/FilterForm/hooks/useFilter.ts";
import ReactHookFormWrapper from "../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import useFilterForm from "../../../../components/Form/FilterForm/hooks/useFilterForm.ts";
import {adminHighRiskIndividualsDefaultFilters} from "./index.constances.ts";
import RiskListTypeField from "../FormFields/RiskListTypeField/RiskListTypeField.tsx";
import NationalCodeField from "../FormFields/NationalCodeField/NationalCodeField.tsx";
import FirstNameField from "../FormFields/FirstNameField/FirstNameField.tsx";
import LastNameField from "../FormFields/LastNameField/LastNameField.tsx";

function AdminHighRiskIndividualsFilter(
  {filters, setFilters}: Pick<UseFilterReturnProps<AdminHighRiskIndividualsFilterType>, 'filters' | 'setFilters'>
) {

  const {
    onSubmit, formMethods
  } = useFilterForm<AdminHighRiskIndividualsFilterType>({
    filters, setFilters, initialFilterData: adminHighRiskIndividualsDefaultFilters
  })

  return (
    <ReactHookFormWrapper
      formMethods={formMethods} onSubmit={onSubmit}
      >
      <RiskListTypeField notRequired />

      <NationalCodeField removeValidations />

      <FirstNameField />

      <LastNameField />
    </ReactHookFormWrapper>
  );
}

export default AdminHighRiskIndividualsFilter;
