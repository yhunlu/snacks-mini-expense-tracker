interface Action {
  type: string;
}

const counterReducer = (state: number, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
