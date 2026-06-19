import {PANEL_TRANSACTION_HISTORY_E_SERVICE_PORTALS} from "./index.constances.tsx";
import ROUTER_LINKS from "../../../../../../constances/routerLinks.ts";
import QUERY_PARAMS from "../../../../../../constances/queryParams.ts";
import getUrlWithParams from "../../../../../../utils/getUrlWithParams.ts";
import {Link} from "react-router";


type Props = {
  isJoint?: boolean;
}

function PanelTransactionHistoryEServiceRender(
  {isJoint}: Props
) {
  return (
    <div className='flex flex-col gap-y-4'>
      <p>
        ابتدا نوع خدمت خود را انتخاب کنید
      </p>

      <div className='flex flex-wrap justify-center gap-3'>
        {PANEL_TRANSACTION_HISTORY_E_SERVICE_PORTALS.map(item => {

          const linkUrl = isJoint ? ROUTER_LINKS.PANEL_JOINT_BANKING_INFORMATION_TRANSACTION_HISTORY_E_SERVICE_DETAIL(item.name) : ROUTER_LINKS.PANEL_INDIVIDUAL_BANKING_INFORMATION_TRANSACTION_HISTORY_E_SERVICE_DETAIL(item.name)
          const params = {
            [QUERY_PARAMS.NAME]: item.label
          }

          return (
            <Link
              to={getUrlWithParams(linkUrl, params)}
              key={item.name}
              className='flex flex-col items-center justify-center gap-y-2 bg-slate-50 hover:bg-slate-100 duration-200 cursor-pointer grow rounded-md border border-gray-300 p-4 min-w-40 max-w-50'
            >
              {item.icon}
              <p>
                {item.label}
              </p>
            </Link>
          )
        })}
      </div>
    </div>
  );
}

export default PanelTransactionHistoryEServiceRender;
