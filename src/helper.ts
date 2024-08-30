import { StyleTypes } from "./types";

export const createStyle = <T extends StyleTypes>(style: T): T => style;
