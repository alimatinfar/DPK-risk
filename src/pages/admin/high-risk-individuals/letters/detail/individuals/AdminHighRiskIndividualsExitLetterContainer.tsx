import type {PropsWithChildren} from "react";
import React from 'react';
import {EXIT_PERSON_FROM_LETTER_KEYS_LABEL} from "./index.constances";
import {type ExitPersonFromLetterType} from "./index.types";


type Props = {
  exitType?: ExitPersonFromLetterType
} & PropsWithChildren

function AdminHighRiskIndividualsExitLetterContainer(
  {exitType, children}: Props
) {

  const childrenRender = (
    <div
      className={`flex flex-col gap-y-4 p-4 rounded-lg bg-white ${exitType ? '' : 'border border-gray-200'}`}>
      {children}
    </div>
  )

  return exitType ? (
    <div className='flex flex-col border border-red-300 rounded-lg overflow-hidden'>
      <div className='text-center text-red-500 font-semibold p-2.5 bg-red-50'>
        {`خروج با ${EXIT_PERSON_FROM_LETTER_KEYS_LABEL[exitType]}`}
      </div>

      {childrenRender}
    </div>
  ) : childrenRender
}

export default AdminHighRiskIndividualsExitLetterContainer;
