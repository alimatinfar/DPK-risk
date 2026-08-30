import getSelectIdValue from "../../../../../../components/Form/Select/utils/getSelectIdValue.ts";
import {fileTypeFieldName} from "../../FileTypeField/index.constances.ts";
import {descriptionFieldName} from "../../DescriptionField/index.constances.ts";
import {uploadFileFieldName} from "../../UploadFileField/index.constances.ts";
import type {AdminHighRiskIndividualsDocumentFormDataType} from "../index.types.ts";
import type {SelectOptionType} from "../../../../../../components/Form/Select/select-exports.ts";

export type HighRiskDocumentsBodyDataType = {
  documentType: SelectOptionType['id'] | null;
  name: string;
  description: string;
  content: any;
}[]

function getHighRiskDocumentsBodyData(documentsList: AdminHighRiskIndividualsDocumentFormDataType[]): HighRiskDocumentsBodyDataType {
  return documentsList.map(document => ({
    documentType: getSelectIdValue(document?.[fileTypeFieldName]),
    name: '',
    description: document?.[descriptionFieldName],
    content: document?.[uploadFileFieldName]?.data,
  }))
}

export default getHighRiskDocumentsBodyData;
