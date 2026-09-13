import {ADMIN_HIGH_RISK_INDIVIDUAL_RELATED_LETTERS_FAKE_DATE} from "./index.constances.ts";
import AdminHighRiskIndividualsExitLetterContainer
  from "../../letters/detail/individuals/AdminHighRiskIndividualsExitLetterContainer.tsx";
import AdminHighRiskIndividualsFieldsWithActions
  from "../../letters/detail/individuals/AdminHighRiskIndividualsFieldsWithActions.tsx";
import Button from "../../../../../components/Form/Button/Button.tsx";
import LogoutIcon from "../../../../../components/svg/LogoutIcon.tsx";
import CardRightRed from "../../../../../components/others/Card/CardRightRed.tsx";
import useAdminHighRiskIndividualsDetailPageLetters from "./hooks/useAdminHighRiskIndividualsDetailPageLetters.tsx";
import type {SetStateType} from "../../../../../types/SetStateType.ts";
import type {ModalStateTypeId} from "../../letters/detail/individuals/index.types.ts";
import {MODAL_STATE_TYPE_KEYS} from "../../letters/detail/individuals/index.constances.ts";
import type {CustomResponseType} from "../../../../../request/types/CustomResponseType.ts";
import type {AdminHighRiskIndividualsDetailItemResponseType} from "./index.types.ts";


export type AdminHighRiskIndividualsDetailPageLettersProps = {
  setDocListModalState: SetStateType<ModalStateTypeId | boolean>;
  setExitPersonModalState: SetStateType<(string | number) | boolean>;
  responseData: CustomResponseType<AdminHighRiskIndividualsDetailItemResponseType[]> | undefined
}

function AdminHighRiskIndividualsDetailPageLetters(
  {
    setDocListModalState, setExitPersonModalState, responseData
  }: AdminHighRiskIndividualsDetailPageLettersProps
) {

  const {
    getTopFields, lettersData
  } = useAdminHighRiskIndividualsDetailPageLetters({
    responseData
  })

  return lettersData.map((item, index) => {
    return (
      <AdminHighRiskIndividualsExitLetterContainer exitType={item.exitType}>
        <AdminHighRiskIndividualsFieldsWithActions
          fields={getTopFields({item, isExit: false})}
          actions={(
            <>
              {!item.exitType && (
                <>
                  <Button
                    onClick={() => setExitPersonModalState(item.riskCustomerId)}
                    justIcon variant='default' color='red'
                  >
                    <LogoutIcon/>
                  </Button>
                </>
              )}
              {/*<Button*/}
              {/*  onClick={() => setDocListModalState({*/}
              {/*    id: item.id, type: MODAL_STATE_TYPE_KEYS.LETTER*/}
              {/*  })}*/}
              {/*  variant='default' color='white'*/}
              {/*>*/}
              {/*  لیست مستندات*/}
              {/*</Button>*/}
            </>
          )}
        />

        {item?.exitLetter && (
          <CardRightRed className='flex flex-col gap-y-4'>
            <AdminHighRiskIndividualsFieldsWithActions
              fields={getTopFields({item: item?.exitLetter, isExit: true})}
              actions={(
                <Button
                  onClick={() => setDocListModalState({
                    id: item.exitLetter?.id || '', type: MODAL_STATE_TYPE_KEYS.LETTER
                  })}
                  variant='default' color='white'
                >
                  لیست مستندات
                </Button>
              )}
            />
          </CardRightRed>
        )}
      </AdminHighRiskIndividualsExitLetterContainer>
    )
  })
}

export default AdminHighRiskIndividualsDetailPageLetters;
