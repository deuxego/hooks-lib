import { useV } from 'hooks/useV';

const UseV = () => {
  // useV example
  const [count, inc, dec] = useV(0)(
    (set) => set((c) => c + 1),
    (set) => set((c) => c - 1)
  );

  return (
    <div>
      <button onClick={inc}>+</button>
      <span>{count}</span>
      <button onClick={dec}>-</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <UseV />
    </div>
  );
};

export default App;
