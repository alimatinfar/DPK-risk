import DevelopingIcon from "../../svg/RenderLogic/DevelopingIcon.tsx";


function DevelopingSection() {
  return (
    <div className='flex flex-col items-center justify-center w-full gap-y-4 h-140'>
      <DevelopingIcon />

      <div className='flex flex-col items-center gap-y-2'>
        <span className='text-slate-900 text-sm'>
          در حال توسعه!
        </span>

        <span className='text-slate-500 text-xs'>
          لطفا بعدا مراجعه کنید
        </span>
      </div>
    </div>
  );
}

export default DevelopingSection;
