import AdminHighRiskIndividualsDocumentsListForm, {
  type AdminHighRiskIndividualsDocumentsListFormProps
} from "../../../FormFields/AdminHighRiskIndividualsDocumentsListForm/AdminHighRiskIndividualsDocumentsListForm";

function AdminHighRiskFormStep2DocumentsList(
  {
    documentsList, setDocumentsList
  }: Pick<AdminHighRiskIndividualsDocumentsListFormProps, 'documentsList' | 'setDocumentsList'>
) {
  return (
    <AdminHighRiskIndividualsDocumentsListForm
      documentsList={documentsList} setDocumentsList={setDocumentsList}
      formWrapperClass='grid grid-cols-3'
      formFieldsProps={{
        descriptionClass: 'col-span-3',
        uploadFileFieldProps: {
          uploadBoxProps: {
            uploadBoxClass: 'col-span-3',
            fileCardClass: 'col-span-1',
          }
        }
      }}
      buttonClass='flex justify-end items-center col-start-3 mt-4' buttonIsNotFullWidth
      documentsListClass='grid grid-cols-2 gap-4'
    />
  );
}

export default AdminHighRiskFormStep2DocumentsList;