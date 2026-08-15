import type { PropsWithChildren } from "react";
import React from 'react';
import {EXIT_PERSON_FROM_LETTER_KEYS_LABEL} from "./index.constances";
import {type ExitPersonFromLetterType} from "./index.types";


type Props = {
  exitType?: ExitPersonFromLetterType
} & PropsWithChildren

function AdminHighRiskIndividualsExitLetterContainer(
  {exitType, children}: Props
) {
  return exitType ? (
    <div className='flex flex-col border border-red-300 rounded-lg overflow-hidden'>
      <div className='text-center text-red-500 font-semibold p-2.5 bg-red-50'>
        {`حذف با ${EXIT_PERSON_FROM_LETTER_KEYS_LABEL[exitType]}`}
      </div>

      {children}
    </div>
  ) : children
}

export default AdminHighRiskIndividualsExitLetterContainer;
