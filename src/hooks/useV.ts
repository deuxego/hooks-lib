import { useState } from "react";

type SetValue<T> = (newValue: T | ((prevValue: T) => T)) => void;

const useV = <T,>(v: T) => {
  const [value, setValue] = useState(v);

  const updater = (...fn: ((set: SetValue<T>, ...params: T[]) => void)[]) => {
    return [value, ...fn.map((f) => f.bind(null, setValue as SetValue<T>))] as const;
  };

  return updater;
};
