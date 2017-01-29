import * as History from "history";

import { configureStore as configureStoreDev } from "./configureStore.development";
import { configureStore as configureStorePro } from "./configureStore.production";

declare var process;

// tslint:disable:no-any
export function configureStore(history: History.History, initialState: any) {
  if (process.env.NODE_ENV === "development") {
    console.log("Development");
    return configureStoreDev(history, initialState);
  } else {
    return configureStorePro(history, initialState);
  }
}
