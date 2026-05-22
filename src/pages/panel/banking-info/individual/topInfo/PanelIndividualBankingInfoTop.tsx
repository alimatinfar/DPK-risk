import {
  DetailInfoSection2,
} from "../../../../../components/others/DetailInfo/DetailInfoSection2";
import usePanelIndividualBankingInfoTop from "./hooks/usePanelIndividualBankingInfoTop.ts";
import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import Loading from "../../../../../components/others/Loading/Loading.tsx";


function PanelIndividualBankingInfoTop() {

  const {
    infoList, error, loading
  } = usePanelIndividualBankingInfoTop()

  return (
    <RenderLogic
      error={error} isLoading={loading} removeContainer
      loadingElement={(
        <div className='h-10 w-full flex-center'>
          <Loading size='sm' />
        </div>
      )}
    >
      <DetailInfoSection2 infoList={infoList} />
    </RenderLogic>
  );
}

export default PanelIndividualBankingInfoTop;
