import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const API = 'https://localhost:4000/api/posts';

// export const getPosts = createAsyncThunk('posts/getPosts', async () => {
//   try {
//     const response = await axios.get(API_URL);
//     return response.data;
//   } catch (error) {
//     return error.message;
//   }
// });

const initialState = {
  user: {},
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // joinMission: (state, action) => {
    //   const missionIdx = state.missionsArr.findIndex((mission) => mission.id === action.payload);
    //   state.missionsArr[missionIdx].activeMember = true; 
    // },
    // leaveMission: (state, action) => {
    //   const missionIdx = state.missionsArr.findIndex((mission) => mission.id === action.payload);
    //   state.missionsArr[missionIdx].activeMember = false; 
    // }
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getPosts.fulfilled, (state, action) => {
  //       state.status = 'fulfilled';
  //       const newArr = [];
  //       action.payload.forEach(post => {
  //         let newPost = {
  //           post: 'post 1'
  //         }
  //         console.log(post)
  //         newArr.push(newPost)
  //       });
  //       state.postsArr = newArr
  //     })
  //     .addCase(getPosts.pending, (state) => {
  //       state.status = 'Loading';
  //     })
  //     .addCase(getPosts.rejected, (state, action) => {
  //       state.status = 'rejected';
  //       state.error = action.error.message
  //     })
  // },
});

// export const { joinMission, leaveMission } = missionsSlice.actions

export default userSlice.reducer;