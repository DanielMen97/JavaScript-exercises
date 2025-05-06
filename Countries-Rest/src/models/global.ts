import { ChangeEvent } from "react";
import { globalStateDefault, StateGlobalI } from "./reducer";

export type OnChangeSelect = (event:ChangeEvent<HTMLSelectElement>) => void
export type OnChangeInput = (event: ChangeEvent<HTMLInputElement>) => void

export interface GlobalContextI {
  state: StateGlobalI,
  handleBack: () => void,
  handleClick : (nameCountry:string) => void,
  handleInputChange : OnChangeInput,
  handleSelectChange : OnChangeSelect,
}

export const globalContextDefault: GlobalContextI  = {
  state: globalStateDefault,
  handleBack: () => {},
  handleClick: () => {},
  handleInputChange: () => {},
  handleSelectChange: () => {},
};