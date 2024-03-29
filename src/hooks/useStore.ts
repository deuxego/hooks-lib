import { useRef, useState } from 'react';

type StateType<T> = {
  [K in keyof T]: T[K];
};


export const useStore = <T>(initialState: StateType<T>) => {
  const [state, setState] = useState(initialState);
  const initial = useRef(initialState);
  initial.current = initialState;

  const reset = (...props: (keyof T)[]) => {
    const toReset = {} as StateType<T>;

    props.map((key) => (toReset[key] = initial.current[key]));

    props.length > 0 ? setState((prev) => ({ ...prev, ...toReset })) : setState(initial.current);
  };

  const proxyState = new Proxy(Object.assign(state, {reset}), {
    set(target, prop, newValue) {
      target[prop as keyof T] = newValue;
      setState((prev) => ({ ...prev, [prop as string]: newValue }));
      return true;
    },
    get(target, prop) {
      return target[prop as keyof T];
    }
  });


  return proxyState;
};
