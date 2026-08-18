import {fileTypeFieldName, type FileTypeFieldType} from "../FileTypeField/index.constances.ts";
import {descriptionFieldName, type DescriptionFieldType} from "../DescriptionField/index.constances.ts";
import {uploadFileFieldName, type UploadFileFieldType} from "../UploadFileField/index.constances.ts";

export type AdminHighRiskIndividualsDocumentFormDataType = {
  [fileTypeFieldName]: FileTypeFieldType;
  [descriptionFieldName]: DescriptionFieldType;
  [uploadFileFieldName]: UploadFileFieldType;
}
export default class AdminHighRiskIndividualsDocumentFormFields {
}
