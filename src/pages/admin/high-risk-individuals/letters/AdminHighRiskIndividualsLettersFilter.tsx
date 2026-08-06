import type {UseFilterReturnProps} from "../../../../components/Form/FilterForm/hooks/useFilter.ts";
import FilterForm from "../../../../components/Form/FilterForm/FilterForm.tsx";
import type {AdminHighRiskIndividualsLettersFilterType} from "./index.types.ts";
import {adminHighRiskIndividualsLettersDefaultFilters} from "./index.constances.tsx";


function AdminHighRiskIndividualsLettersFilter(
  {
    filters, setFilters
  }: Pick<UseFilterReturnProps<AdminHighRiskIndividualsLettersFilterType>, 'filters' | 'setFilters'>
) {
  return (
    <FilterForm<AdminHighRiskIndividualsLettersFilterType>
      filters={filters} setFilters={setFilters}
      initialFilterData={adminHighRiskIndividualsLettersDefaultFilters}
    />
  );
}

export default AdminHighRiskIndividualsLettersFilter;
