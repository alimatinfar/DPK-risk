
export type DetailInfoSectionItemType = {
  label: string;
  value: string | number | undefined | null;
  column?: number;
}

export type DetailInfoSectionProps = {
  title: string;
  infoList: DetailInfoSectionItemType[];
}