import { useState } from "react";

type StateType<T> = {
  [K in keyof T]: T[K];
};

export const useStore = <T,>(initialState: StateType<T>) => {
  const [state, setState] = useState(initialState);

  const proxyState = new Proxy(state, {
    set(target, prop, newValue) {
      target[prop as keyof T] = newValue;
      setState({...state, [prop as string]: newValue});
      return true;
    },
    get(target, prop) {
      return target[prop as keyof T];
    }
  });

  return proxyState;
};