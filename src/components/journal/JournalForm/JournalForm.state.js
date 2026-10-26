export const INITIAL_STATE = {
  validState: {
    title: true,
    date: true,
    text: true,
  },
  formData: {
    title: '',
    text: '',
    date: '',
    tag: '',
  },
  isReadyToSubmit: false,
};

export const actionTypes = {
  RESET_VALIDITY: 'RESET_VALIDITY',
  UPDATE_FORM_DATA: 'UPDATE_FORM_DATA',
  SUBMIT: 'SUBMIT',
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.RESET_VALIDITY:
      return {
        ...state,
        validState: { ...INITIAL_STATE.validState },
        isReadyToSubmit: false,
      };

    case actionTypes.UPDATE_FORM_DATA: {
      const {
        name, value,
      } = action.payload;

      return {
        ...state,
        formData: {
          ...state.formData,
          [name]: value,
        },
        isReadyToSubmit: false,
      };
    }

    case actionTypes.SUBMIT: {
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
