/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useRef, useState } from 'react';

type StateType<T> = {
  [K in keyof T]: T[K];
};

export const useStore = <T>(initialState: StateType<T>) => {
  const [state, setState] = useState(initialState);
  const initial = useRef(initialState);
  initial.current = initialState;

  const reset = (...props: (keyof T)[]) => {
    const toReset = {} as StateType<T>;

    props.forEach((key) => (toReset[key] = initial.current[key]));

    props.length > 0 ? setState((prev) => ({ ...prev, ...toReset })) : setState(initial.current);
  };

  const proxyState = useMemo(
    () =>
      new Proxy(
        { ...state, reset },
        {
          set(target, prop, newValue) {
            target[prop as keyof T] = newValue;
            setState((prevState) => ({ ...prevState, [prop]: newValue }));
            return true;
          },
          get(target, prop) {
            return target[prop as keyof T];
          }
        }
      ),
    [state]
  );

  return proxyState;
};
