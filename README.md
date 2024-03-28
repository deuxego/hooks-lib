## `Hooks lib`

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
