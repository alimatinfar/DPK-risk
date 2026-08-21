import AdminHighRiskIndividualsFormButtons from "../../AdminHighRiskIndividualsFormButtons.tsx";
import Card from "../../../../../../components/others/Card/Card";
import AdminHighRiskFormStep4Individuals from "./AdminHighRiskFormStep4Individuals";
import AdminHighRiskFormStep4Form from "./AdminHighRiskFormStep4Form";
import useAdminHighRiskFormStep4 from "./hooks/useAdminHighRiskFormStep4";


function AdminHighRiskFormStep4() {

  const {
    activePerson, setActivePerson, formMethods, onSubmit
  } = useAdminHighRiskFormStep4()

  return (
    <div className='flex flex-col gap-y-4'>
      <Card
        paddingClass=' '
        className='flex overflow-hidden'
      >
        <AdminHighRiskFormStep4Individuals
          activePerson={activePerson} setActivePerson={setActivePerson}
        />

        <AdminHighRiskFormStep4Form
          formMethods={formMethods} onSubmit={onSubmit}
        />
      </Card>

      <AdminHighRiskIndividualsFormButtons
        onClick={onSubmit}
      />
    </div>
  );
}

export default AdminHighRiskFormStep4;
