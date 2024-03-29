## `Hooks lib`

### `useStore`

```tsx
  // was used Proxy for triggering re-render
  const store = useStore({ count: 0 });

  return (
    <div>
      <button onClick={() => (store.count += 1)}>+</button>
      <span>{store.count}</span>
      <button onClick={() => (store.count -= 1)}>-</button>
    </div>
  );
```

### `useV`
```tsx

  const [value, onChange] = useV('')(
    (set, v: string) => set(v)
  );
  
  const [count, inc, dec] = useV(0)(
    (set) => set((c) => c + 1),
    (set) => set((c) => c - 1)
  );

```
