import getSelectIdValue from "../../../../../../components/Form/Select/utils/getSelectIdValue.ts";
import {fileTypeFieldName} from "../../FileTypeField/index.constances.ts";
import {descriptionFieldName} from "../../DescriptionField/index.constances.ts";
import {uploadFileFieldName} from "../../UploadFileField/index.constances.ts";
import type {AdminHighRiskIndividualsDocumentFormDataType} from "../index.types.ts";
import type {SelectOptionType} from "../../../../../../components/Form/Select/select-exports.ts";


export type HighRiskDocumentsBodyDataType = {
  documentType: SelectOptionType['id'] | null;
  name: string | undefined;
  description: string;
  content: any;
}[]

const getHighRiskDocumentsBodyData = async (
  documentsList: AdminHighRiskIndividualsDocumentFormDataType[]
): Promise<HighRiskDocumentsBodyDataType> => {
  return Promise.all(
    documentsList.map(async (document) => {
      const file = document?.[uploadFileFieldName];

      return {
        documentType: getSelectIdValue(document?.[fileTypeFieldName]),
        name: file?.name,
        description: document?.[descriptionFieldName],
        content: file?.data,
      };
    })
  );
};

export default getHighRiskDocumentsBodyData;
