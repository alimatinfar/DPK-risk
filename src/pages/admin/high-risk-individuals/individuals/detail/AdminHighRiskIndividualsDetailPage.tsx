import {useParams} from "react-router";
import useGetQueryParam from "../../../../../hooks/useGetQueryParam.ts";
import QUERY_PARAMS from "../../../../../constances/queryParams.ts";
import AdminPageTitle from "../../../layout/AdminPageTitle.tsx";
import CardWithHeader from "../../../../../components/others/Card/CardWithHeader/CardWithHeader.tsx";
import {ADMIN_HIGH_RISK_INDIVIDUAL_RELATED_LETTERS_FAKE_DATE} from "./index.constances.ts";
import AdminHighRiskIndividualsExitLetterContainer
  from "../../letters/detail/individuals/AdminHighRiskIndividualsExitLetterContainer.tsx";
import type {
  AdminHighRiskIndividualRelatedLetterType,
  AdminHighRiskIndividualRelatedShareLetterType
} from "./index.types.ts";
import {letterNumberFieldName} from "../../FormFields/LetterNumberField/index.constances.ts";
import {announceReferenceFieldName} from "../../FormFields/AnnouncingReferenceField/index.constances.ts";
import {letterDateFieldName} from "../../FormFields/LetterDateField/index.constances.ts";
import {descriptionFieldName} from "../../FormFields/DescriptionField/index.constances.ts";
import {expireDateFieldName} from "../../FormFields/ExpireDateField/index.constances.ts";
import AdminHighRiskIndividualsEntryReasonsTags
  from "../../letters/detail/individuals/AdminHighRiskIndividualsEntryReasonsTags.tsx";
import AdminHighRiskIndividualsFieldsWithActions
  from "../../letters/detail/individuals/AdminHighRiskIndividualsFieldsWithActions.tsx";
import Button from "../../../../../components/Form/Button/Button.tsx";
import LogoutIcon from "../../../../../components/svg/LogoutIcon.tsx";
import CardRightRed from "../../../../../components/others/Card/CardRightRed.tsx";


type GetFieldsIsExitLetter = {
  isExit: true;
  item: AdminHighRiskIndividualRelatedShareLetterType;
}

type GetFieldsIsMainLetter = {
  isExit: false;
  item: AdminHighRiskIndividualRelatedLetterType;
}

type GetFieldsType = GetFieldsIsExitLetter | GetFieldsIsMainLetter

function AdminHighRiskIndividualsDetailPage() {

  const {id: customNumber} = useParams()
  const name = useGetQueryParam(QUERY_PARAMS.NAME)

  function getTopFields({item, isExit}: GetFieldsType) {
    return [
      {
        label: 'شماره نامه', value: item?.[letterNumberFieldName]
      },
      {
        label: 'مرجع', value: item?.[announceReferenceFieldName]
      },
      {
        label: 'تاریخ نامه', value: item?.[letterDateFieldName]
      },
      ...isExit ? [] : [{
        label: 'تاریخ اعتبار', value: item?.[expireDateFieldName]
      }],
    ]
  }

  function getBottomFields({item, isExit}: GetFieldsType) {
    return [
      {
        label: 'توضیحات نامه', value: item?.[descriptionFieldName]
      },
      ...isExit ? [] : [{
        label: 'دلیل ورود', value: (
          <AdminHighRiskIndividualsEntryReasonsTags
            entryReasons={item.entryReasons}
          />
        )
      }],
    ]
  }

  return (
    <div className='flex flex-col gap-y-4'>
      <AdminPageTitle hasBack title={name || ''}/>

      <CardWithHeader
        title='تایم لاین تغییرات'
        headerEndAdornment={<div>timeline</div>}
      >
        محتوای تایم لاین
      </CardWithHeader>

      <CardWithHeader
        title='نامه‌ها'
        childrenClassName='flex flex-col gap-y-2 bg-gray-50 p-2'
      >
        {ADMIN_HIGH_RISK_INDIVIDUAL_RELATED_LETTERS_FAKE_DATE.map((item, index) => {
          return (
            <AdminHighRiskIndividualsExitLetterContainer exitType={item.exitType}>
              <AdminHighRiskIndividualsFieldsWithActions
                fields={getTopFields({item, isExit: false})}
                actions={(
                  <>
                    {!item.exitType && (
                      <>
                        <Button
                          onClick={() => console.log('exit')}
                          justIcon variant='default' color='red'
                        >
                          <LogoutIcon/>
                        </Button>
                      </>
                    )}
                    <Button
                      // onClick={() => setDocListModalState({
                      //   id: item.id, type: DOCUMENT_MODAL_STATE_TYPE_KEYS.PERSON
                      // })}
                      variant='default' color='white'
                    >
                      لیست مستندات
                    </Button>
                  </>
                )}
                bottomFields={getBottomFields({item, isExit: false})}
              />

              {item?.exitLetter && (
                <CardRightRed className='flex flex-col gap-y-4'>
                  <AdminHighRiskIndividualsFieldsWithActions
                    fields={getTopFields({item, isExit: true})}
                    actions={(
                      <Button
                        // onClick={() => setDocListModalState({
                        //   id: item.exitLetter?.id || '', type: DOCUMENT_MODAL_STATE_TYPE_KEYS.LETTER
                        // })}
                        variant='default' color='white'
                      >
                        لیست مستندات
                      </Button>
                    )}
                    bottomFields={getBottomFields({item, isExit: true})}
                  />
                </CardRightRed>
              )}
            </AdminHighRiskIndividualsExitLetterContainer>
          )
        })}
      </CardWithHeader>
    </div>
  );
}

export default AdminHighRiskIndividualsDetailPage;
