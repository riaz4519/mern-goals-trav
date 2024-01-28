import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  goals: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
}

export const createGoal = createAsyncThunk('goals/create', async(goalData,thunkAPI) =>{

    try {
      
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }

})

export const goalSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {},
})

export const { reset } = goalSlice.actions

export default goalSlice.reducer
