import { useRouteError } from "react-router";
import Button from "../../Form/Button/Button.tsx";
import ErrorState from "./ErrorState.tsx";

function ErrorPage() {
  const error = useRouteError() as Error;

  function refreshPageHandler() {
    window.location.reload()
  }

  return (
    <div className='h-dvh w-dvw flex items-center justify-center flex-col gap-y-3'>
      <ErrorState error={error?.message || 'خطای نامشخص'} />

      <div className='w-50'>
        <Button fullWidth onClick={refreshPageHandler}>
          رفرش صفحه
        </Button>
      </div>
    </div>
  );
}

export default ErrorPage