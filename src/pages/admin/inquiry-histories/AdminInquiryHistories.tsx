import AdminPageTitle from "../layout/AdminPageTitle.tsx";
import {Link} from "react-router";
import ROUTER_LINKS from "../../../constances/routerLinks.ts";
import AddButton from "../../../components/Form/Button/inheritedButtons/AddButton.tsx";
import Card from "../../../components/others/Card/Card.tsx";
import TableRenderLogic from "../../../components/others/RenderLogic/TableRenderLogic.tsx";
import AdminInquiryHistoriesFilter from "./AdminInquiryHistoriesFilter.tsx";
import {
  ADMIN_INQUIRY_HISTORIES_COLUMNS
} from "./index.constances.tsx";
import useAdminInquiryHistories from "./hooks/useAdminInquiryHistories.tsx";
import DisplayModal from "../../../components/others/Modal/DisplayModal.tsx";
import {lazy} from "react";

const AdminInquiryHistoriesDeleteModal = lazy(() => import(
  "./AdminInquiryHistoriesDeleteModal.tsx"
  ));


function AdminInquiryHistories() {

  const {
    filters, setFilters, tableData,
    deleteModalOpen, deleteModalState, closeDeleteModal, deleteModalShouldBeRemoved
  } = useAdminInquiryHistories()

  return (
    <>
      <div className='flex flex-col gap-y-4'>
        <div>
          <AdminPageTitle children={(
            <Link to={ROUTER_LINKS.ADMIN_INQUIRY_HISTORIES_FORM}>
              <AddButton>
                ثبت اطلاعات استعلام
              </AddButton>
            </Link>
          )}/>
        </div>

        <Card className='flex flex-col gap-y-4'>
          <div className='flex items-center justify-end'>
            <AdminInquiryHistoriesFilter
              filters={filters} setFilters={setFilters}
            />
          </div>

          <TableRenderLogic
            renderLogicProps={{
              error: null,
              isLoading: false
            }}
            tableProps={{
              data: tableData,
              columns: ADMIN_INQUIRY_HISTORIES_COLUMNS
            }}
          />
        </Card>
      </div>

      <DisplayModal
        shouldBeRemoved={deleteModalShouldBeRemoved}
      >
        <AdminInquiryHistoriesDeleteModal
          modalState={deleteModalState} onClose={closeDeleteModal} open={deleteModalOpen}
        />
      </DisplayModal>
    </>
  );
}

export default AdminInquiryHistories;
