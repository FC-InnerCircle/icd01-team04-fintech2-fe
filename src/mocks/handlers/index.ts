import { type HttpHandler } from "msw";
import { exampleHandler } from "./example";

export const handlers: HttpHandler[] = [...exampleHandler];
