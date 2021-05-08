import { createSlice } from'@reduxjs/toolkit';





const colorPalette = createSlice({
    name:"colors",
    initialState:{
    
        red:0,
        aqua:0,
        yellow:0,
        purple:0,
        orange:0,
        blue:0
    },
    reducers:{
          addRedCount: (state, action) =>{
              state.red = action.payload;
          },
          addAquaCount: (state, action) =>{
            state.aqua = action.payload
        },
        addYellowCount: (state, action) =>{
            state.yellow = action.payload
        },
        addPurpleCount: (state, action) =>{
            state.purple = action.payload
        },
        addOrangeCount: (state, action) =>{
            state.orange = action.payload
        },
        addBlueCount: (state, action) =>{
            state.blue = action.payload
        },
      


    }
});

export const { addRedCount, addAquaCount, addYellowCount, addPurpleCount, addOrangeCount, addBlueCount    } = colorPalette.actions;
export const reducer = colorPalette.reducer;



