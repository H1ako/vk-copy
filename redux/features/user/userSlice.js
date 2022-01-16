import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      name: 'Name',
      pic: 'https://sun1-21.userapi.com/s/v1/if1/J6ZNGjrk_XlYV0jnySaCoez-JjzOnJhkXw6hlubH2JD4vVmgp-f8xYbPRtL5eEwJljBLkoMy.jpg?size=50x50&amp;quality=96&amp;crop=2,194,1077,1077&amp;ava=1',

    },
    reducers: {
      set_user: (state, action) => {
        state.name = action.payload.name ?? action.payload.name
        state.pic = action.payload.pic ?? action.payload.pic
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { set_user } = userSlice.actions
  
  export default userSlice.reducer