const initState = {
    themeId: 1,
}
type initialStateType = typeof initState
export const themeReducer = (state = initState, action: ThemeReducerType): initialStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":{
            return {...state, themeId: action.id}
        }

        default:
            return state
    }
}

export type ThemeReducerType = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const)