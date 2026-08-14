import {customerIdFieldName, type ResultPersonCardDataType} from "../../../search/result/ResultCard.types.ts";
import useResultPersonCategoryFields from "../../../search/result/hooks/useResultPersonCategoryFields.ts";
import {adminHighRiskIndividualsCardSeparatedFieldsNameLabel} from "./index.constances.ts";
import DeleteIcon from "../../../../components/svg/DeleteIcon.tsx";
import IconClickable from "../../../../components/others/Icon/IconClickable.tsx";
import Button from "../../../../components/Form/Button/Button.tsx";
import DownloadIcon from "../../../../components/svg/DownloadIcon.tsx";
import {useMemo} from "react";
import CardTitleValue, {type CardTitleValueProps} from "../../../../components/others/Card/CardTitleValue.tsx";
import DetailIcon from "../../../../components/svg/DetailIcon.tsx";
import {Link} from "react-router";
import ROUTER_LINKS from "../../../../constances/routerLinks.ts";
import getUrlWithParams from "../../../../utils/getUrlWithParams.ts";
import QUERY_PARAMS from "../../../../constances/queryParams.ts";


type Props = {
  data: ResultPersonCardDataType
}

function AdminHighRiskIndividualsCardElement(
  {data}: Props
) {

  const {fields} = useResultPersonCategoryFields({
    separatedFieldsName: adminHighRiskIndividualsCardSeparatedFieldsNameLabel, data
  })

  const shareFields: CardTitleValueProps[] = useMemo(function () {
    return [
      {
        label: 'تعداد نامه‌ها',
        value: '3'
      },
      {
        label: 'تعداد مستندات',
        value: '3'
      },
    ]
  }, [])

  const categoryFields = [fields, shareFields]

  const detailLink = useMemo(function () {
    const url = ROUTER_LINKS.ADMIN_HIGH_RISK_INDIVIDUAL_DETAIL(data?.[customerIdFieldName])
    const params = {
      [QUERY_PARAMS.NAME]: data.name
    }
    return getUrlWithParams(url, params)
  }, [data])

  return (
    <div className='rounded-lg border border-gray-200 flex flex-col overflow-hidden'>
      <div className='bg-gray-100 flex items-center justify-between px-2 py-1.5'>
        <p>
          {data.name}
        </p>

        <Link to={detailLink}>
          <IconClickable
            hoverClass='hover:bg-white'
          >
            <DetailIcon />
          </IconClickable>
        </Link>
      </div>

      <div className='p-2 flex flex-col bg-white'>
        {categoryFields.map((fields, categoryIndex) => {
          return (
            <div
              key={categoryIndex}
              className={`flex flex-col gap-y-2 py-2 ${categoryIndex === 0 ? '' : 'border-t border-gray-200'}`}
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
