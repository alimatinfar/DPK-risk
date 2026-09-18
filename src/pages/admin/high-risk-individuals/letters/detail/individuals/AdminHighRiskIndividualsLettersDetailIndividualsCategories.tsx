import ResultPersonCategory2 from "../../../../../search/result/ResultPersonCategory2.tsx";
import {
  type DetailInfoSectionLabelValueProps
} from "../../../../../../components/others/DetailInfo/DetailInfoSection/DetailInfoSectionLabelValue";
import {
  type AdminHighRiskIndividualsLettersDetailIndividualsDataItemType,
  type AdminHighRiskIndividualsLettersDetailIndividualsDataType, type ModalStateTypeId
} from "./index.types";
import {
  MODAL_STATE_TYPE_KEYS
} from "./index.constances";
import Button from "../../../../../../components/Form/Button/Button";
import LogoutIcon from "../../../../../../components/svg/LogoutIcon";
import AdminHighRiskIndividualsFieldsWithActions
  from "./AdminHighRiskIndividualsFieldsWithActions.tsx";
import CardRightRed from "../../../../../../components/others/Card/CardRightRed.tsx";
import useAdminHighRiskIndividualsLettersDetailIndividualsCategories
  from "./hooks/useAdminHighRiskIndividualsLettersDetailIndividualsCategories.ts";
import type {SetStateType} from "../../../../../../types/SetStateType.ts";
import AdminHighRiskIndividualsExitLetterContainer from "./AdminHighRiskIndividualsExitLetterContainer";
import ResultPersonCategoryWrapper from "../../../../../search/result/ResultPersonCategoryWrapper.tsx";
import DeleteIcon from "../../../../../../components/svg/DeleteIcon.tsx";


type Props = {
  setDocListModalState?: SetStateType<ModalStateTypeId | boolean>;
  setDeletePersonModalState?: SetStateType<number | boolean>;
  setExitPersonModalState?: SetStateType<AdminHighRiskIndividualsLettersDetailIndividualsDataItemType | boolean>;
  data: AdminHighRiskIndividualsLettersDetailIndividualsDataType
}

function AdminHighRiskIndividualsLettersDetailIndividualsCategories(
  {
    setDocListModalState, setExitPersonModalState, setDeletePersonModalState, data
  }: Props
) {

  const {
    getFields, getExitLetterFields
  } = useAdminHighRiskIndividualsLettersDetailIndividualsCategories()

  return (
    <ResultPersonCategoryWrapper renderCallback={(category) => (
      <ResultPersonCategory2
        key={category.name} personTypeItem={category} resultData={data}
        customContent={(visibleItems) => {

          const items = visibleItems as AdminHighRiskIndividualsLettersDetailIndividualsDataType

          return (
            <div className='flex flex-col gap-y-2'>
              {items.map((item) => {

                const fields: DetailInfoSectionLabelValueProps[] = getFields(item)

                const exitLetterFields: DetailInfoSectionLabelValueProps[] = getExitLetterFields(item)

                return (
                  <AdminHighRiskIndividualsExitLetterContainer exitType={item.exitType}>
                    <AdminHighRiskIndividualsFieldsWithActions
                      fields={fields}
                      actions={(
                        <>
                          {((!item.exitType && setExitPersonModalState) || setDeletePersonModalState) && (
                            <Button
                              onClick={() => setDeletePersonModalState ? setDeletePersonModalState(Number(item?.id)) :
                                setExitPersonModalState ? setExitPersonModalState(item) : null}
                              justIcon variant='default' color='red'
                            >
                              {setDeletePersonModalState ? <DeleteIcon /> : <LogoutIcon/>}
                            </Button>
                          )}
                        </>
                      )}
                    />

                    {item?.exitLetter && (
                      <CardRightRed className='flex flex-col gap-y-4'>
                        <AdminHighRiskIndividualsFieldsWithActions
                          fields={exitLetterFields}
                          {...setDocListModalState && {
                            actions:(
                              <Button
                                onClick={() => setDocListModalState({
                                  id: item.exitLetter?.id || '', type: MODAL_STATE_TYPE_KEYS.LETTER
                                })}
                                variant='default' color='white'
                              >
                                لیست مستندات
                              </Button>
                            )
                          }}
                          bottomFields={[{
                            label: 'توضیحات',
                            value: item?.exitLetter?.description
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
    )}/>
  );
}

export default AdminHighRiskIndividualsLettersDetailIndividualsCategories;
