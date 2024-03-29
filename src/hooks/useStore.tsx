import { useState } from "react";

export const useStore = <T,>(initialState: Record<string, T>) => {
  const [state, setState] = useState(initialState);

  const proxyState = new Proxy(state, {
    set(target, prop, newValue) {
      target[prop as string] = newValue;
      setState({...state, [prop as string]: newValue});
      return true;
    },
    get(target, prop) {
      return target[prop as string];
    }
  });

  return proxyState;
};