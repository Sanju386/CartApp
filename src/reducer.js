export const reducer = (state, {type,payload})=>{
switch (type) {
    case "ADD_ITEM":
      return {...state, inputValue: payload}  
       
    case "CLEAR_ITEM":
     return {...state, inputValue: payload}

    case "ADD_DATA":
return {...state, data: [...state.data, payload]}

case "DELETE_ITEM":
    return {...state, data: state.data.filter((itm)=> itm.id !== payload)}

    default:
        return state
}

}