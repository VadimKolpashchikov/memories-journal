export const INITIAL_STATE = {
  validState: {
    title: true,
    date: true,
    text: true,
  },
  formData: {
    title: '',
    text: '',
    date: null,
    tag: '',
  },
  isReadyToSubmit: false,
};

export const formReducerActions = {
  RESET_VALIDITY: 'RESET_VALIDITY',
  UPDATE_FORM_DATA: 'UPDATE_FORM_DATA',
  SUBMIT: 'SUBMIT',
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case formReducerActions.RESET_VALIDITY:
      return {
        ...state,
        validState: { ...INITIAL_STATE.validState },
        isReadyToSubmit: false,
      };

    case formReducerActions.SUBMIT: {
      const formData = { ...action.payload };
      formData.title = action.payload.title.trim();
      formData.text = action.payload.text.trim();

      const validState = Object.fromEntries(
        Object.keys(INITIAL_STATE.validState)
          .map((key) => ([key, Boolean(formData[key])])),
      );

      return {
        validState,
        formData,
        isReadyToSubmit: Object.values(validState).every((val) => val),
      };
    }

    default:
      break;
  }
};
