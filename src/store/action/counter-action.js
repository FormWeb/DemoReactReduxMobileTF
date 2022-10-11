import { createAction } from "@reduxjs/toolkit";

export const counterIncrementation = createAction("counter/incr")
export const counterDecrementation = createAction("counter/decr")
export const counterReset = createAction("counter/reset")