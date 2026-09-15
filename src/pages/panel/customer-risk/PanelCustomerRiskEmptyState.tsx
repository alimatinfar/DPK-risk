import Button from "../../../components/Form/Button/Button.tsx";
import RiskScoreEmptyImage from "../../../assets/images/risk-score-empty.svg"
import RiskScoreWaveBgImage from "../../../assets/images/risk-score-wave-bg.svg"


function PanelCustomerRiskEmptyState() {
  return (
    <div className='bg-gray-300/30'>
      <div
        style={{
          backgroundImage: `
            radial-gradient(
              circle at center,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 1) 75%
            ),
            url(${RiskScoreWaveBgImage})
          `,
        }}
        className='flex flex-col gap-y-12 items-center max-w-[450px] p-8'
      >
        <img src={RiskScoreEmptyImage} alt=""/>

        <div className='flex flex-col items-center gap-y-3'>
          <p className='text-2xl font-semibold'>
            محاسبه ریسک مشتری
          </p>

          <p className='text-gray-500 text-center leading-6'>
            محاسبه ریسک با پردازش شاخص‌های مختلف انجام می‌شود و ممکن است چند دقیقه زمان ببرد. لطفاً تا تکمیل فرآیند شکیبا باشید.
          </p>

          <div className='w-45'>
            <Button fullWidth>
              شروع محاسبه
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PanelCustomerRiskEmptyState;
