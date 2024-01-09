import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';

interface CounterStore {
  counter: number;
  increment: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  increment: () => set((store) => ({ counter: store.counter + 1 })),
  reset: () => set(() => ({ counter: 0 })),
}));

if (process.env.NODE_ENV !== 'production') {
  mountStoreDevtool('Counter Store', useCounterStore);
}

export default useCounterStore;
