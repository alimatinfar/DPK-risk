import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../../../search/form/SearchPageForm.constances.ts";
import ResultPersonCategory2 from "../../../../../search/result/ResultPersonCategory2.tsx";
import {
  type DetailInfoSectionLabelValueProps
} from "../../../../../../components/others/DetailInfo/DetailInfoSection/DetailInfoSectionLabelValue";
import {
  type AdminHighRiskIndividualsLettersDetailIndividualsDataItemType,
  type AdminHighRiskIndividualsLettersDetailIndividualsDataType, type DocumentModalState
} from "./index.types";
import Tag from "../../../../../../components/others/Tag/Tag";
import {
  ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_INDIVIDUALS_FAKE_DATA, DOCUMENT_MODAL_STATE_TYPE_KEYS
} from "./index.constances";
import Button from "../../../../../../components/Form/Button/Button";
import EditIcon from "../../../../../../components/svg/EditIcon";
import LogoutIcon from "../../../../../../components/svg/LogoutIcon";
import AdminHighRiskIndividualsFieldsWithActions
  from "./AdminHighRiskIndividualsFieldsWithActions.tsx";
import CardRightRed from "../../../../../../components/others/Card/CardRightRed.tsx";
import useAdminHighRiskIndividualsLettersDetailIndividualsCategories
  from "./hooks/useAdminHighRiskIndividualsLettersDetailIndividualsCategories.ts";
import type {SetStateType} from "../../../../../../types/SetStateType.ts";
import AdminHighRiskIndividualsExitLetterContainer from "./AdminHighRiskIndividualsExitLetterContainer";
import AdminHighRiskIndividualsEntryReasonsTags from "./AdminHighRiskIndividualsEntryReasonsTags.tsx";


type Props = {
  setEditPersonModalState: SetStateType<AdminHighRiskIndividualsLettersDetailIndividualsDataItemType | boolean>;
  setDocListModalState: SetStateType<DocumentModalState | boolean>;
  setExitPersonModalState: SetStateType<AdminHighRiskIndividualsLettersDetailIndividualsDataItemType | boolean>;
}

function AdminHighRiskIndividualsLettersDetailIndividualsCategories(
  {
    setEditPersonModalState, setDocListModalState, setExitPersonModalState
  }: Props
) {

  const {
    getFields, getExitLetterFields
  } = useAdminHighRiskIndividualsLettersDetailIndividualsCategories()

  return (
    <div className='flex flex-col gap-y-4'>
      {Object.values(SEARCH_PAGE_FORM_PERSON_TYPE_KEYS).map(category => (
        <ResultPersonCategory2
          key={category.name} personTypeItem={category}
          resultData={ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_INDIVIDUALS_FAKE_DATA}
          customContent={(visibleItems) => {

            const items = visibleItems as AdminHighRiskIndividualsLettersDetailIndividualsDataType

            return (
              <div className='p-2 flex flex-col gap-y-2'>
                {items.map((item, itemIndex) => {

                  const fields: DetailInfoSectionLabelValueProps[] = getFields(item)

                  const exitLetterFields: DetailInfoSectionLabelValueProps[] = getExitLetterFields(item)

                  return (
                    <AdminHighRiskIndividualsExitLetterContainer exitType={item.exitType}>
                        <AdminHighRiskIndividualsFieldsWithActions
                          fields={fields}
                          actions={(
                            <>
                              {!item.exitType && (
                                <>
                                  <Button
                                    onClick={() => setExitPersonModalState(item)}
                                    justIcon variant='default' color='red'
                                  >
                                    <LogoutIcon/>
                                  </Button>

                                  <Button
                                    onClick={() => setEditPersonModalState(item)}
                                    justIcon variant='default' color='white'
                                  >
                                    <EditIcon/>
                                  </Button>
                                </>
                              )}
                              <Button
                                onClick={() => setDocListModalState({
                                  id: item.id, type: DOCUMENT_MODAL_STATE_TYPE_KEYS.PERSON
                                })}
                                variant='default' color='white'
                              >
                                لیست مستندات
                              </Button>
                            </>
                          )}
                          bottomFields={[{
                            label: 'دلیل ورود',
                            value: (
                              <AdminHighRiskIndividualsEntryReasonsTags
                                entryReasons={item.entryReasons.map(reason => reason.name)}
                              />
                            )
                          }]}
                        />

                        {item?.exitLetter && (
                          <CardRightRed className='flex flex-col gap-y-4'>
                            <AdminHighRiskIndividualsFieldsWithActions
                              fields={exitLetterFields}
                              actions={(
                                <Button
                                  onClick={() => setDocListModalState({
                                    id: item.exitLetter?.id || '', type: DOCUMENT_MODAL_STATE_TYPE_KEYS.LETTER
                                  })}
                                  variant='default' color='white'
                                >
                                  لیست مستندات
                                </Button>
                              )}
                              bottomFields={[{
                                label: 'توضیحات',
                                value: 'حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. '
                              }]}
                            />
                          </CardRightRed>
                        )}
                    </AdminHighRiskIndividualsExitLetterContainer>
                  )
                })}
              </div>
            )
          }}
        />
      ))}
    </div>
  );
}

export default AdminHighRiskIndividualsLettersDetailIndividualsCategories;
