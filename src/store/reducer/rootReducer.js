const initState = {
    user : "A1029087 - John Carson"
}

const rootReducer = (state = initState,action) => {
    if(action.type === "CHANGE_USER")
    {
        let user = action.value;
        return{
            ...state,
            user
        }
    }
    return state;
}

export default rootReducer; 