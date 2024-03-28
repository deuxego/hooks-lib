## `Hooks lib`

### `useV`
```tsx
  const [count, inc, dec] = useV(0)(
    (set) => set((c) => c + 1),
    (set) => set((c) => c - 1)
  );

```