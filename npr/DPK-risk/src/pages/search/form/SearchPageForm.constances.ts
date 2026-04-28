import NaturalPersonIcon from "../../../components/svg/personTypes/NaturalPersonIcon.tsx";
import LegalPersonType from "../../../components/svg/personTypes/LegalPersonType.tsx";
import ForeignCitizenIcon from "../../../components/svg/personTypes/ForeignCitizenIcon.tsx";

export const SEARCH_PAGE_FORM_PERSON_TYPE_KEYS = {
  NATURAL: {
    name: 'natural',
    label: 'اشخاص حقیقی',
    icon: NaturalPersonIcon
  },
  FOREIGN_CITIZEN: {
    name: 'foreignCitizen',
    label: 'اتباع خارجی',
    icon: ForeignCitizenIcon
  },
  LEGAL: {
    name: 'legal',
    label: 'اشخاص حقوقی',
    icon: LegalPersonType
  },
} as const