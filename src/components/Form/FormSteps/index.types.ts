import type {PropsWithChildren} from "react";

export type StepsTypes = {
  id: number;
  text: string;
  caption?: string;
} & PropsWithChildren
