import { OptionsInterface } from "./type";

//kind of views options in the rulings section
export const VIEW_TYPE: Array<OptionsInterface> = [
  {
    value: "List",
    label: "Lista",
  },
  {
    value: "Grid",
    label: "Cuadrícula",
  },
];

export const HOST_URL = process.env.REACT_APP_BASE_API_URL;
