import { createSlice } from '@reduxjs/toolkit'


export const getInitialState = () =>
    [...new Array(144)].reduce(
        (json, curval, index) => {
            const label = index + 1
            json.buttons[label] = { label, ishighlighted: false, isSelected: false }
            return json
        },
        { buttons: {} }
    )


export const numberSlice = createSlice({
    name: 'number',
    initialState: getInitialState(),
    reducers: {
        buttonClicked: (state, action) => {
            state.buttons = state.buttons[action.payload].isSelected ? getInitialState().buttons : Object.values(state.buttons).reduce(
                (json, { label }) => {
                    json.buttons[label] = {
                        label,
                        ishighlighted: action.payload % label === 0,
                        isSelected: label === action.payload,
                    }
                    return json
                },
                { buttons: {} }
            ).buttons;
        }
    },
})

// Action creators are generated for each case reducer function
export const { buttonClicked } = numberSlice.actions

export default numberSlice.reducer;