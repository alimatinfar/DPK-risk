import {
  ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_TABS_KEYS
} from "../../high-risk-individuals/letters/detail/index.constances.tsx";
import {lazy} from "react";
import type {AdminInquiryHistoryLetterDetailProps} from "./index.types.ts";

const AdminInquiryHistoryDetailDocuments = lazy(() => import(
  "./AdminInquiryHistoryDetailDocuments.tsx"
  ));
const AdminInquiryHistoryDetailIndividuals = lazy(() => import(
  "./AdminInquiryHistoryDetailIndividuals.tsx"
  ));

export const ADMIN_INQUIRY_HISTORY_DETAIL_TABS_RENDER_OBJECT = (
  {responseData, refetch}: AdminInquiryHistoryLetterDetailProps
) => ({
  [ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_TABS_KEYS.DOCUMENTS]: (
    <AdminInquiryHistoryDetailDocuments
      responseData={responseData} refetch={refetch}
    />
  ),
  [ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_TABS_KEYS.INDIVIDUALS]: (
    <AdminInquiryHistoryDetailIndividuals
      responseData={responseData} refetch={refetch}
    />
  ),
})
