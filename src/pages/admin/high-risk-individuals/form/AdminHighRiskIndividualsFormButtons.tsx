import useAdminHighRiskIndividualsFormCurrentStep from "./store/useAdminHighRiskIndividualsFormCurrentStep.ts";
import ROUTER_LINKS from "../../../../constances/routerLinks.ts";
import AdminHighRiskIndividualsFormButtonsShare, {
  type AdminHighRiskIndividualsFormButtonsShareProps
} from "./AdminHighRiskIndividualsFormButtonsShare.tsx";


type Props = Pick<AdminHighRiskIndividualsFormButtonsShareProps,
  'loading' | 'isLastStep' | 'onClick'
>

function AdminHighRiskIndividualsFormButtons(
  {isLastStep, onClick, loading}: Props
) {

  const {currentStep, setCurrentStep} = useAdminHighRiskIndividualsFormCurrentStep()

  return (
    <AdminHighRiskIndividualsFormButtonsShare
      currentStep={currentStep} setCurrentStep={setCurrentStep}
      loading={loading} targetUrl={ROUTER_LINKS.ADMIN_HIGH_RISK_INDIVIDUAL}
      onClick={onClick} isLastStep={isLastStep}
    />
  );
}

export default AdminHighRiskIndividualsFormButtons;
