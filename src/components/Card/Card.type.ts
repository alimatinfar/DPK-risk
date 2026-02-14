import { PropsWithChildren } from "react";

export interface ICardProps extends PropsWithChildren {
  title: string;
  className: string;
  headerClassName:string;
}
