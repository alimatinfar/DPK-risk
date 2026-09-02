import AdminHighRiskIndividualsFormButtons from "../../AdminHighRiskIndividualsFormButtons.tsx";
import Card from "../../../../../../components/others/Card/Card.tsx";
import AdminHighRiskFormStep4PrevIndividuals from "./AdminHighRiskFormStep4PrevIndividuals.tsx";
import AdminHighRiskFormStep4PrevForm from "./AdminHighRiskFormStep4PrevForm.tsx";
import useAdminHighRiskFormStep4Prev from "./hooks/useAdminHighRiskFormStep4Prev.ts";


function AdminHighRiskFormStep4Prev() {

  const {
    activePerson, setActivePerson, formMethods, onSubmit, documentsList, setDocumentsList,
    checkExtraDataIsCompleted
  } = useAdminHighRiskFormStep4Prev()

  return (
    <div className='flex flex-col gap-y-4'>
      <Card
        paddingClass=' '
        className='flex overflow-hidden'
      >
        <AdminHighRiskFormStep4PrevIndividuals
          activePerson={activePerson} setActivePerson={setActivePerson}
          checkExtraDataIsCompleted={checkExtraDataIsCompleted}
        />

        <AdminHighRiskFormStep4PrevForm
          formMethods={formMethods} onSubmit={onSubmit} documentsList={documentsList}
          setDocumentsList={setDocumentsList}
        />
      </Card>

      <AdminHighRiskIndividualsFormButtons
        onClick={onSubmit}
      />
    </div>
  );
}

export default AdminHighRiskFormStep4Prev;
