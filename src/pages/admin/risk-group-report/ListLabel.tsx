import type {PropsWithChildren} from "react";

function ListLabel({children}: PropsWithChildren) {
  return (
    <p className='text-secondary-text font-medium'>
      {children}
    </p>
  );
}

export default ListLabel;
