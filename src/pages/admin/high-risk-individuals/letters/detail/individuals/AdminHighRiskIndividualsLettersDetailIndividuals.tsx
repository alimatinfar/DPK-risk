import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../../../search/form/SearchPageForm.constances.ts";
import {FAKE_DATA} from "../../../individuals/index.constances.ts";
import ResultPersonCategory2 from "../../../../../search/result/ResultPersonCategory2.tsx";

function AdminHighRiskIndividualsLettersDetailIndividuals() {
  return (
    <div className='flex flex-col gap-y-4'>
      {Object.values(SEARCH_PAGE_FORM_PERSON_TYPE_KEYS).map(category => (
        <ResultPersonCategory2
          key={category.name} personTypeItem={category} resultData={FAKE_DATA}
          customContent={(visibleItems) => visibleItems.map((item, itemIndex) => (
            <div key={itemIndex}>
              {item.type}
            </div>
          ))}
        />
      ))}
    </div>
  );
}

export default AdminHighRiskIndividualsLettersDetailIndividuals;
