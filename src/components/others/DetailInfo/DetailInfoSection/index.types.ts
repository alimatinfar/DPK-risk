import type {CardWithHeaderProps} from "../../Card/CardWithHeader/CardWithHeader.tsx";

export type DetailInfoSectionItemType = {
  label: string;
  value: string | number | undefined | null;
  column?: number;
}

export type DetailInfoSectionProps = {
  title: string;
  infoList: DetailInfoSectionItemType[];
  customGridColsClass?: string;
  customColumnsNumber?: number;
  cardWithHeaderProps?: Partial<CardWithHeaderProps>;
}
