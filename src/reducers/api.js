const apiReducers = (state = null , action) => {
  switch (action.type){
      case "Ticket":
          return action.payload;
      default:
      return state;
  }
}

export default apiReducers;