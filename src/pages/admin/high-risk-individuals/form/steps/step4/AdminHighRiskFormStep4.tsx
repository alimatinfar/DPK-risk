import AdminHighRiskIndividualsFormButtons from "../../AdminHighRiskIndividualsFormButtons.tsx";
import Card from "../../../../../../components/others/Card/Card";
import AdminHighRiskFormStep4Individuals from "./AdminHighRiskFormStep4Individuals";
import AdminHighRiskFormStep4Form from "./AdminHighRiskFormStep4Form";

function AdminHighRiskFormStep4() {
  return (
    <div className='flex flex-col gap-y-4'>
      <Card
        paddingClass=' '
        className='flex'
      >
        <AdminHighRiskFormStep4Individuals />

        <AdminHighRiskFormStep4Form />
      </Card>

      <AdminHighRiskIndividualsFormButtons/>
    </div>
  );
}

export default AdminHighRiskFormStep4;
