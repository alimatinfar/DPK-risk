import {customerIdFieldName, type ResultPersonCardDataType} from "../../../search/result/ResultCard.types.ts";
import useResultPersonCategoryFields from "../../../search/result/hooks/useResultPersonCategoryFields.ts";
import {adminHighRiskIndividualsCardSeparatedFieldsNameLabel} from "./index.constances.ts";
import IconClickable from "../../../../components/others/Icon/IconClickable.tsx";
import {useMemo} from "react";
import CardTitleValue from "../../../../components/others/Card/CardTitleValue.tsx";
import DetailIcon from "../../../../components/svg/DetailIcon.tsx";
import {Link} from "react-router";
import ROUTER_LINKS from "../../../../constances/routerLinks.ts";
import getUrlWithParams from "../../../../utils/getUrlWithParams.ts";
import QUERY_PARAMS from "../../../../constances/queryParams.ts";


type Props = {
  data: ResultPersonCardDataType;
  // lettersNumbers?: number;
  // documentsNumbers?: number;
  hiddenAction?: boolean;
}

function AdminHighRiskIndividualsCardElement(
  {data, hiddenAction}: Props
) {

  const {fields} = useResultPersonCategoryFields({
    separatedFieldsName: adminHighRiskIndividualsCardSeparatedFieldsNameLabel, data
  })

  // const shareFields: CardTitleValueProps[] = useMemo(function () {
  //   return [
  //     ...lettersNumbers == null ? [] : [{
  //       label: 'تعداد نامه‌ها',
  //       value: lettersNumbers
  //     }],
  //     ...documentsNumbers == null ? [] : [{
  //       label: 'تعداد مستندات',
  //       value: documentsNumbers
  //     }],
  //   ]
  // }, [lettersNumbers, documentsNumbers])

  // const categoryFields = [fields, shareFields]
  const categoryFields = [fields]

  const detailLink = useMemo(function () {
    const url = ROUTER_LINKS.ADMIN_HIGH_RISK_INDIVIDUAL_DETAIL(data?.[customerIdFieldName])
    const params = {
      [QUERY_PARAMS.NAME]: data.name
    }
    return getUrlWithParams(url, params)
  }, [data])

  return (
    <div className='rounded-lg border border-slate-200 dark:border-dark-2 flex flex-col overflow-hidden'>
      <div className='bg-slate-100 dark:bg-dark-2 flex items-center justify-between px-2 py-1.5'>
        <p>
          {data.name}
        </p>

        {!hiddenAction && (
          <Link to={detailLink}>
            <IconClickable
              hoverClass='hover:bg-white dark:hover:bg-dark-4'
            >
              <DetailIcon />
            </IconClickable>
          </Link>
        )}
      </div>

      <div className='p-2 flex flex-col bg-white dark:bg-dark-1 flex-1'>
        {categoryFields.map((fields, categoryIndex) => {

          const isFirst = categoryIndex === 0
          const isLast = categoryIndex === categoryFields?.length - 1

          return (
            <div
              key={categoryIndex}
              className={`flex flex-col gap-y-2 pt-2 ${isLast ? '' : 'pb-2'} ${isFirst ? '' : 'border-t border-slate-200'}`}
            >
              {fields.map(({label, value}, index) => (
                <CardTitleValue
                  key={index} label={label} value={value}
                />
              ))}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default AdminHighRiskIndividualsCardElement;
