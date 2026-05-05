import {type Moment} from "moment-jalaali";

function getBodyDataDateField(value: Moment) {
  return value ? Number(value.format('YYYYMMDD')) : ''
}

export default getBodyDataDateField;