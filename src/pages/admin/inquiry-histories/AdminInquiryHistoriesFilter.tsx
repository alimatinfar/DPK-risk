import FilterForm from "../../../components/Form/FilterForm/FilterForm.tsx";
import type {UseFilterReturnProps} from "../../../components/Form/FilterForm/hooks/useFilter.ts";
import {adminInquiryHistoriesDefaultFilters} from "./index.constances.tsx";
import type {AdminInquiryHistoriesFilterType} from "./index.types.ts";

function AdminInquiryHistoriesFilter(
  {
    filters, setFilters
  }: Pick<UseFilterReturnProps<AdminInquiryHistoriesFilterType>, 'filters' | 'setFilters'>
) {
  return (
    <FilterForm<AdminInquiryHistoriesFilterType>
      filters={filters} setFilters={setFilters}
      initialFilterData={adminInquiryHistoriesDefaultFilters}
    ></FilterForm>
  );
}

export default AdminInquiryHistoriesFilter;
