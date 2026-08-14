import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../../../search/form/SearchPageForm.constances.ts";
import ResultPersonCategory2 from "../../../../../search/result/ResultPersonCategory2.tsx";
import {
  type DetailInfoSectionLabelValueProps
} from "../../../../../../components/others/DetailInfo/DetailInfoSection/DetailInfoSectionLabelValue";
import {
  type AdminHighRiskIndividualsLettersDetailIndividualsDataItemType,
  type AdminHighRiskIndividualsLettersDetailIndividualsDataType
} from "./index.types";
import Tag from "../../../../../../components/others/Tag/Tag";
import {
  ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_INDIVIDUALS_FAKE_DATA,
  EXIT_PERSON_FROM_LETTER_KEYS_LABEL
} from "./index.constances";
import Button from "../../../../../../components/Form/Button/Button";
import EditIcon from "../../../../../../components/svg/EditIcon";
import LogoutIcon from "../../../../../../components/svg/LogoutIcon";
import AdminHighRiskIndividualsLettersDetailIndividualsFieldsWithActions
  from "./AdminHighRiskIndividualsLettersDetailIndividualsFieldsWithActions.tsx";
import CardRightRed from "../../../../../../components/others/Card/CardRightRed.tsx";
import useAdminHighRiskIndividualsLettersDetailIndividualsCategories
  from "./hooks/useAdminHighRiskIndividualsLettersDetailIndividualsCategories.ts";


type Props = {
  setEditPersonModalState: (value: AdminHighRiskIndividualsLettersDetailIndividualsDataItemType | boolean) => void
}

function AdminHighRiskIndividualsLettersDetailIndividualsCategories(
  {
    setEditPersonModalState
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

                  const content = (
                    <div
                      className={`flex flex-col gap-y-4 p-4 rounded-lg bg-white ${item.exitType ? '' : 'border border-gray-200'}`}>
                      <AdminHighRiskIndividualsLettersDetailIndividualsFieldsWithActions
                        fields={fields}
                        actions={(
                          <>
                            {!item.exitType && (
                              <>
                                <Button justIcon variant='default' color='red'>
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
                            <Button variant='default' color='white'>
                              لیست مستندات
                            </Button>
                          </>
                        )}
                        bottomField={{
                          label: 'دلیل ورود',
                          value: (
                            <div className='flex flex-wrap gap-x-2'>
                              {item.entryReasons?.map((reason, reasonIndex) => (
                                <Tag text={reason?.name} color='gray' variant='fade'/>
                              ))}
                            </div>
                          )
                        }}
                      />

                      {item.exitLetter && (
                        <CardRightRed className='flex flex-col gap-y-4'>
                          <AdminHighRiskIndividualsLettersDetailIndividualsFieldsWithActions
                            fields={exitLetterFields}
                            actions={(
                              <Button variant='default' color='white'>
                                لیست مستندات
                              </Button>
                            )}
                            bottomField={{
                              label: 'توضیحات',
                              value: 'حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. '
                            }}
                          />
                        </CardRightRed>
                      )}
                    </div>
                  )

                  return item.exitType ? (
                    <div className='flex flex-col border border-red-300 rounded-lg overflow-hidden'>
                      <div className='text-center text-red-500 font-semibold p-2.5 bg-red-50'>
                        {`حذف با ${EXIT_PERSON_FROM_LETTER_KEYS_LABEL[item.exitType]}`}
                      </div>

                      {content}
                    </div>
                  ) : content
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
