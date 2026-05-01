
export type DetailInfoSectionItemType = {
  label: string;
  value: string;
  column?: number;
}

export type DetailInfoSectionProps = {
  title: string;
  infoList: DetailInfoSectionItemType[];
}