import type {SelectOptionType} from "../../../../../../components/Form/Select/select-exports.ts";
import type {UploadFileDataType} from "../../../../../../components/others/FileDataCard/hooks/useFileDataCard.ts";

export type AdminHighRiskIndividualsLettersDetailDocumentType = {
  id: string | number;
  fileType: SelectOptionType;
  description: string;
  fileData: UploadFileDataType
}
