import { runtimeModel } from "../common/models";

interface RootState {
  runtime: runtimeModel
}

export const selectRuntime = (state: RootState) => state.runtime;
