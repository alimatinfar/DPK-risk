import WhiteAddButton from "../../../../../../components/Form/Button/inheritedButtons/WhiteAddButton.tsx";
import CardWithHeader from "../../../../../../components/others/Card/CardWithHeader/CardWithHeader.tsx";
import type {AdminHighRiskIndividualsLettersDetailDocumentType} from "./index.types.ts";
import type {SetStateType} from "../../../../../../types/SetStateType.ts";
import AdminHighRiskIndividualsLettersDetailDocumentsDocsCard
  from "./AdminHighRiskIndividualsLettersDetailDocumentsDocsCard.tsx";


export type AdminHighRiskIndividualsLettersDetailDocumentsDocsProps = {
  documents: AdminHighRiskIndividualsLettersDetailDocumentType[];
  setDeleteModalState?: SetStateType<AdminHighRiskIndividualsLettersDetailDocumentType | false>;
  setFormModalState?: SetStateType<AdminHighRiskIndividualsLettersDetailDocumentType | boolean>;
}

function AdminHighRiskIndividualsLettersDetailDocumentsDocs(
  {
    documents, setDeleteModalState, setFormModalState
  }: AdminHighRiskIndividualsLettersDetailDocumentsDocsProps
) {
  return (
    <CardWithHeader
      title='مستندات'
      {...setFormModalState && {
        headerEndAdornment: (
          <WhiteAddButton
            onClick={() => setFormModalState(true)}
          >
            افزودن مستند
          </WhiteAddButton>
        )
      }}
    >
      {documents.map((document, index) => (
        <AdminHighRiskIndividualsLettersDetailDocumentsDocsCard
          document={document} index={index} setDeleteModalState={setDeleteModalState}
        />
      ))}
    </CardWithHeader>
  );
}

export default AdminHighRiskIndividualsLettersDetailDocumentsDocs;
