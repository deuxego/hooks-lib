import { useStore } from 'hooks/useStore';
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

const UseStore = () => {
    // useStore example
  const store = useStore({ count: 0 });

  return (
    <div>
      <button onClick={() => (store.count += 1)}>+</button>
      <span>{store.count}</span>
      <button onClick={() => (store.count -= 1)}>-</button>
    </div>
  );
};


const App = () => {
  return (
    <div>
      <UseV />
      <UseStore />
    </div>
  );
};

export default App;
