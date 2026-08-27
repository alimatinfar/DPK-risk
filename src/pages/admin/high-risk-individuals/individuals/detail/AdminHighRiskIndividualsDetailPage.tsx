import AdminPageTitle from "../../../layout/AdminPageTitle.tsx";
import CardWithHeader from "../../../../../components/others/Card/CardWithHeader/CardWithHeader.tsx";
import AdminHighRiskIndividualsDetailPageLetters from "./AdminHighRiskIndividualsDetailPageLetters.tsx";
import useGetQueryParam from "../../../../../hooks/useGetQueryParam.ts";
import {useParams} from "react-router";
import QUERY_PARAMS from "../../../../../constances/queryParams.ts";
import useAdminHighRiskIndividualsDocumentListModalStates
  from "../../letters/detail/individuals/docListModal/hooks/useAdminHighRiskIndividualsDocumentListModalStates.ts";
import DisplayModal from "../../../../../components/others/Modal/DisplayModal.tsx";
import {lazy} from "react";
import AdminHighRiskIndividualsLettersDetailIndividualsExitModal
  from "../../letters/detail/individuals/exitModal/AdminHighRiskIndividualsLettersDetailIndividualsExitModal.tsx";
import useAdminHighRiskIndividualsExitModalStates
  from "../../letters/detail/individuals/exitModal/hooks/useAdminHighRiskIndividualsExitModalStates.ts";
import HighRiskIndividualsTimeLine from "../../letters/detail/HighRiskIndividualsTimeLine/HighRiskIndividualsTimeLine.tsx";
import useAdminHighRiskIndividualsLettersDetailIndividualsTimeLine
  from "../../letters/detail/individuals/hooks/useAdminHighRiskIndividualsLettersDetailIndividualsTimeLine.ts";

const AdminHighRiskIndividualsLettersDetailIndividualsDocListModal = lazy(() => import(
  "../../letters/detail/individuals/docListModal/AdminHighRiskIndividualsLettersDetailIndividualsDocListModal.tsx"
  ));


function AdminHighRiskIndividualsDetailPage() {

  const {id: customNumber} = useParams()
  const name = useGetQueryParam(QUERY_PARAMS.NAME)

  const {
    docListModalOpen, docListModalShouldBeRemoved, closeDocListModalHandler, docListModalState, setDocListModalState
  } = useAdminHighRiskIndividualsDocumentListModalStates()

  const {
    exitPersonModalOpen, exitPersonModalShouldBeRemoved, closeExitPersonModalHandler,
    exitPersonModalState, setExitPersonModalState
  } = useAdminHighRiskIndividualsExitModalStates<(string | number) | boolean>(false)

  const {
    timeLineHistories
  } = useAdminHighRiskIndividualsLettersDetailIndividualsTimeLine()

  return (
    <>
      <div className='flex flex-col gap-y-4'>
        <AdminPageTitle hasBack title={name || ''}/>

        <div className='flex items-start gap-x-4'>
          <CardWithHeader
            title='نامه‌ها' className='flex-1'
            childrenClassName='flex flex-col gap-y-2 bg-gray-50 p-2'
          >
            <AdminHighRiskIndividualsDetailPageLetters
              setDocListModalState={setDocListModalState}
              setExitPersonModalState={setExitPersonModalState}
            />
          </CardWithHeader>

          <HighRiskIndividualsTimeLine histories={timeLineHistories} />
        </div>
      </div>

      <DisplayModal shouldBeRemoved={docListModalShouldBeRemoved}>
        <AdminHighRiskIndividualsLettersDetailIndividualsDocListModal
          open={docListModalOpen} onClose={closeDocListModalHandler}
          modalState={docListModalState}
        />
      </DisplayModal>

      <DisplayModal shouldBeRemoved={exitPersonModalShouldBeRemoved}>
        <AdminHighRiskIndividualsLettersDetailIndividualsExitModal
          open={exitPersonModalOpen} onClose={closeExitPersonModalHandler}
          modalState={exitPersonModalState}
          personTitle={name || ''}
        />
      </DisplayModal>
    </>
  );
}

export default AdminHighRiskIndividualsDetailPage;
