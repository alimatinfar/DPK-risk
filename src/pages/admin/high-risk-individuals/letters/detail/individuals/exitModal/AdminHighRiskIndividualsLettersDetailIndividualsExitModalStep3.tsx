import AdminHighRiskIndividualsDocumentFormFields
  , {
  type AdminHighRiskIndividualsDocumentFormDataType
} from "../../documents/formModal/AdminHighRiskIndividualsDocumentFormFields.tsx";
import ReactHookFormWrapper
  from "../../../../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import useReactHookFormWrapper
  from "../../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import Button from "../../../../../../../components/Form/Button/Button.tsx";
import RenderLogic from "../../../../../../../components/others/RenderLogic/RenderLogic.tsx";
import type {SetStateType} from "../../../../../../../types/SetStateType.ts";
import AdminHighRiskIndividualsDocumentCard from "../docListModal/AdminHighRiskIndividualsDocumentCard.tsx";


type Props = {
  documentsList: AdminHighRiskIndividualsDocumentFormDataType[],
  setDocumentsList: SetStateType<AdminHighRiskIndividualsDocumentFormDataType[]>
}

function AdminHighRiskIndividualsLettersDetailIndividualsExitModalStep3(
  {documentsList, setDocumentsList}: Props
) {

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper<AdminHighRiskIndividualsDocumentFormDataType>({
    onSubmitHandler
  })

  function onSubmitHandler(formData: AdminHighRiskIndividualsDocumentFormDataType) {
    setDocumentsList(prev => ([
      ...prev,
      formData
    ]))
    formMethods.reset()
  }

  function deleteDocumentHandler(index: number) {
    setDocumentsList(prev => {
      return [...prev.filter((_, itemIndex) => itemIndex !== index)]
    })
  }

  return (
    <div className='mb-4'>
      <div className='mb-4 pb-4 border-b border-gray-200'>
        <ReactHookFormWrapper
          formMethods={formMethods} onSubmit={onSubmit}
        >
          <AdminHighRiskIndividualsDocumentFormFields/>

          <div className='mt-2'>
            <Button
              type='submit'
              variant='outlined'
              fullWidth
            >
              ذخیره
            </Button>
          </div>
        </ReactHookFormWrapper>
      </div>

      <RenderLogic isEmpty={documentsList.length === 0} emptyText='سندی اضافه نشده است'>
        <div className='flex flex-col gap-y-4'>
          {documentsList.map((document, index) => (
            <AdminHighRiskIndividualsDocumentCard
              document={document}
              deleteAction={() => deleteDocumentHandler(index)}
            />
          ))}
        </div>
      </RenderLogic>
    </div>
  );
}

export default AdminHighRiskIndividualsLettersDetailIndividualsExitModalStep3;
