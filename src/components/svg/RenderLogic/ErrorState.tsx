import ErrorStateIcon from "./ErrorStateIcon.tsx";


type Props = {
  error: string;
}

function ErrorState(
  {error}: Props
) {
  return (
    <div className='flex flex-col items-center justify-center gap-y-4'>
      <ErrorStateIcon/>

      <span className='text-red-500'>
        {error}
      </span>
    </div>
  );
}

export default ErrorState;