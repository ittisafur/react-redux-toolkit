import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Increment
    incremented(state){
      // Basically Immer is making a copy of the state, we don't have to think about making it immutable like spreading 
      state.value++; 
    },
    amountAdded (state, action: PayloadAction<number>){
      state.value += action.payload;
    }
  }
})

export const { incremented, amountAdded  }= counterSlice.actions
export default counterSlice.reducer
