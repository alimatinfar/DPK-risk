import AdminPageTitle from "../../../layout/AdminPageTitle.tsx";
import CardWithHeader from "../../../../../components/others/Card/CardWithHeader/CardWithHeader.tsx";
import AdminHighRiskIndividualsDetailPageLetters from "./AdminHighRiskIndividualsDetailPageLetters.tsx";
import DisplayModal from "../../../../../components/others/Modal/DisplayModal.tsx";
import {lazy} from "react";
import HighRiskIndividualsTimeLine
  from "../../letters/detail/HighRiskIndividualsTimeLine/HighRiskIndividualsTimeLine.tsx";
import APIS from "../../../../../request/constances/apis.ts";
import useAdminHighRiskIndividualsDetailPage from "./hooks/useAdminHighRiskIndividualsDetailPage.ts";
import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";

const AdminHighRiskIndividualsLettersDetailIndividualsDocListModal = lazy(() => import(
  "../../letters/detail/individuals/docListModal/AdminHighRiskIndividualsLettersDetailIndividualsDocListModal.tsx"
  ));
const AdminHighRiskIndividualsLettersDetailIndividualsExitModal = lazy(() => import(
  "../../letters/detail/individuals/exitModal/AdminHighRiskIndividualsLettersDetailIndividualsExitModal.tsx"
  ))

function AdminHighRiskIndividualsDetailPage() {

  const {
    setDocListModalState, setExitPersonModalState, timeLineHistories, docListModalShouldBeRemoved, docListModalOpen,
    closeDocListModalHandler, docListModalState, exitPersonModalShouldBeRemoved, exitPersonModalOpen,
    closeExitPersonModalHandler, exitPersonModalState, name, responseData, responseError, responseLoading, refetch
  } = useAdminHighRiskIndividualsDetailPage()

  const firstCustomer = responseData?.data?.[0]

  return (
    <>
      <div className='flex flex-col gap-y-4'>
        <AdminPageTitle hasBack title={name || ''}/>

        <RenderLogic
          isLoading={responseLoading} error={responseError}
        >
          <div className='flex items-start gap-x-4'>
            <CardWithHeader
              title='نامه‌ها' className='flex-1'
              childrenClassName='flex flex-col gap-y-2 bg-slate-50 dark:bg-dark-1 p-2'
            >
              <AdminHighRiskIndividualsDetailPageLetters
                setDocListModalState={setDocListModalState}
                setExitPersonModalState={setExitPersonModalState}
                responseData={responseData}
              />
            </CardWithHeader>

            <HighRiskIndividualsTimeLine histories={timeLineHistories}/>
          </div>
        </RenderLogic>
      </div>

      <DisplayModal shouldBeRemoved={docListModalShouldBeRemoved}>
        <AdminHighRiskIndividualsLettersDetailIndividualsDocListModal
          open={docListModalOpen} onClose={closeDocListModalHandler}
          modalState={docListModalState}
          deleteDocumentApiAddress={APIS.ADMIN_HIGH_RISK_INDIVIDUAL_LETTER_DELETE_DOCUMENT}
        />
      </DisplayModal>

      <DisplayModal shouldBeRemoved={exitPersonModalShouldBeRemoved}>
        <AdminHighRiskIndividualsLettersDetailIndividualsExitModal
          open={exitPersonModalOpen} onClose={closeExitPersonModalHandler}
          modalState={exitPersonModalState}
          personTitle={name || ''} refetch={refetch}
          referenceValue={{
            id: firstCustomer?.letterRef || '', name: firstCustomer?.letterRefTitle ||  ''
          }}
        />
      </DisplayModal>
    </>
  );
}

export default AdminHighRiskIndividualsDetailPage;
