import AdminHighRiskIndividualsFormButtonsShare, {
  type AdminHighRiskIndividualsFormButtonsShareProps
} from "../../high-risk-individuals/form/AdminHighRiskIndividualsFormButtonsShare.tsx";
import ROUTER_LINKS from "../../../../constances/routerLinks.ts";
import useAdminInquiryHistoryFormCurrentStep from "./store/useAdminInquiryHistoryFormCurrentStep.ts";

type Props = Pick<AdminHighRiskIndividualsFormButtonsShareProps,
  'loading' | 'isLastStep' | 'onClick'
>

function AdminInquiryHistoriesFormButtons(
  {isLastStep, onClick, loading}: Props
) {

  const {currentStep, setCurrentStep} = useAdminInquiryHistoryFormCurrentStep()

  return (
    <AdminHighRiskIndividualsFormButtonsShare
      currentStep={currentStep} setCurrentStep={setCurrentStep}
      loading={loading} targetUrl={ROUTER_LINKS.ADMIN_INQUIRY_HISTORIES}
      onClick={onClick} isLastStep={isLastStep}
    />
  );
}

export default AdminInquiryHistoriesFormButtons;
