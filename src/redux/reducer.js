

let initialState = {
    elma : 0,  
  }
  
  export const reducer = (state = initialState, action) => {
    switch(action.type){
      case "EKLE":
        return { elma : state.elma + 1 };
      case "CIKART":
        return { elma : state.elma - 1 };
      default:
        return state
    }
  }