import { useState } from "react";

type SetValue<T> = (newValue: T | ((prevValue: T) => T)) => void;

export const useV = <T,>(v: T) => {
  const [value, setValue] = useState(v);

  const updater = (...fn: ((set: SetValue<T>) => void)[]) => {
    return [value, ...fn.map((f) => f.bind({value}, setValue as SetValue<T>))] as const;
  };

  return updater;
};