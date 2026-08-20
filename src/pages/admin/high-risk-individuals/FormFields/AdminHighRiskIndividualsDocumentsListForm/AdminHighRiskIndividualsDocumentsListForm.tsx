import {
  type AdminHighRiskIndividualsDocumentFormDataType
} from "../AdminHighRiskIndividualsDocumentFormFields/index.types.ts";
import ReactHookFormWrapper
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import useReactHookFormWrapper
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import Button from "../../../../../components/Form/Button/Button.tsx";
import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import AdminHighRiskIndividualsDocumentCard from "../../letters/detail/individuals/docListModal/AdminHighRiskIndividualsDocumentCard.tsx";
import AdminHighRiskIndividualsDocumentFormFields
  , {
  type AdminHighRiskIndividualsDocumentFormFieldsProps
} from "../AdminHighRiskIndividualsDocumentFormFields/AdminHighRiskIndividualsDocumentFormFields.tsx";
import setDefaultValuesFromObject
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/utils/setDefaultValuesFromObject";


type Props = {
  documentsList: AdminHighRiskIndividualsDocumentFormDataType[];
  setDocumentsList: (value: AdminHighRiskIndividualsDocumentFormDataType[]) => void;
  formFieldsProps?: AdminHighRiskIndividualsDocumentFormFieldsProps;
  buttonClass?: string;
  formWrapperClass?: string;
  documentsListClass?: string;
  buttonIsNotFullWidth?: boolean;
}

function AdminHighRiskIndividualsDocumentsListForm(
  {
    documentsList, setDocumentsList, formFieldsProps, buttonClass, buttonIsNotFullWidth, formWrapperClass,
    documentsListClass
  }: Props
) {

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper<AdminHighRiskIndividualsDocumentFormDataType>({
    onSubmitHandler
  })

  function onSubmitHandler(formData: AdminHighRiskIndividualsDocumentFormDataType) {
    setDocumentsList([
      ...documentsList,
      formData
    ])
    formMethods.reset()
  }

  function deleteDocumentHandler(index: number) {
    setDocumentsList([...documentsList.filter((_, itemIndex) => itemIndex !== index)])
  }

  function editDocumentHandler(index: number, document: AdminHighRiskIndividualsDocumentFormDataType) {
    deleteDocumentHandler(index)
    setDefaultValuesFromObject({
      defaultValues: document,
      setValue: formMethods.setValue
    })
  }

  return (
    <div className='mb-4'>
      <div className='mb-4 pb-4 border-b border-gray-200'>
        <ReactHookFormWrapper
          formMethods={formMethods} onSubmit={onSubmit} className={formWrapperClass || ''}
        >
          <AdminHighRiskIndividualsDocumentFormFields
            {...formFieldsProps}
          />

          <div className={`mt-2 ${buttonClass || ''}`}>
            <Button
              type='submit'
              variant='outlined'
              fullWidth={!buttonIsNotFullWidth}
            >
              افزودن
            </Button>
          </div>
        </ReactHookFormWrapper>
      </div>

      <RenderLogic isEmpty={documentsList.length === 0} emptyText='سندی اضافه نشده است'>
        <div className={documentsListClass || 'flex flex-col gap-y-4'}>
          {documentsList.map((document, index) => (
            <AdminHighRiskIndividualsDocumentCard
              document={document}
              deleteAction={() => deleteDocumentHandler(index)}
              editAction={() => editDocumentHandler(index, document)}
            />
          ))}
        </div>
      </RenderLogic>
    </div>
  );
}

export default AdminHighRiskIndividualsDocumentsListForm;
