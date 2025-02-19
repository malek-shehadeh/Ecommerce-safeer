// src/redux/slices/compareSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/product';

interface CompareState {
  items: Product[];
}

const initialState: CompareState = {
  items: []
};

const compareSlice = createSlice({
  name: 'compare',
  initialState,
  reducers: {
    addToCompare: (state, action: PayloadAction<Product>) => {
      if (!state.items.find(item => item.id === action.payload.id)) {
        state.items.push(action.payload);
      }
    },
    removeFromCompare: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    }
  }
});

export const { addToCompare, removeFromCompare } = compareSlice.actions;
export default compareSlice.reducer;