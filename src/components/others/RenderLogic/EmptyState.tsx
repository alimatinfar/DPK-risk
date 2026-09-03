import type {ReactNode} from 'react';
import EmptyStateIcon from "../../svg/RenderLogic/EmptyStateIcon.tsx";


type Props = {
  title?: string;
  description?: string;
  icon?: ReactNode;
  wrapperPadding?: string;
}

function EmptyState({title, description, icon, wrapperPadding}: Props) {
  return (
    <div className={`${wrapperPadding || 'py-10 px-5'} flex flex-col items-center max-w-90 mx-auto`}>
      <div className='mb-3'>
        {icon || <EmptyStateIcon />}
      </div>

      <p className='text-sm font-medium text-center'>
        {title || 'نتيجه اي يافت نشد!'}
      </p>

      {description && (
        <p className='text-xs mt-2 text-gray-500 text-center leading-4'>
          {description}
        </p>
      )}
    </div>
  );
}

export default EmptyState;
