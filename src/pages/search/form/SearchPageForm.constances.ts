import NaturalPersonIcon from "../../../components/svg/personTypes/NaturalPersonIcon.tsx";
import LegalPersonType from "../../../components/svg/personTypes/LegalPersonType.tsx";
import ForeignCitizenIcon from "../../../components/svg/personTypes/ForeignCitizenIcon.tsx";
import {type ResultPersonCardDataType} from "../result/ResultCard.types";

export const SEARCH_PAGE_FORM_PERSON_TYPE_KEYS = {
  NATURAL: {
    id: 1,
    name: 'natural',
    label: 'اشخاص حقیقی',
    icon: NaturalPersonIcon
  },
  FOREIGN_CITIZEN: {
    id: 2,
    name: 'foreignCitizen',
    label: 'اتباع خارجی',
    icon: ForeignCitizenIcon
  },
  LEGAL: {
    id: 3,
    name: 'legal',
    label: 'اشخاص حقوقی',
    icon: LegalPersonType
  },
} as const