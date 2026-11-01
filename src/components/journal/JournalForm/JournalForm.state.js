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
  RESET_FORM_DATA: 'RESET_FORM_DATA',
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
        validState: {
          ...state.validState,
          [name]: true,
        },
        formData: {
          ...state.formData,
          [name]: value,
        },
        isReadyToSubmit: false,
      };
    }

    case actionTypes.RESET_FORM_DATA: {
      return {
        ...state,
        formData: { ...INITIAL_STATE.formData },
        validState: { ...INITIAL_STATE.validState },
        isReadyToSubmit: INITIAL_STATE.isReadyToSubmit,
      };
    }

    case actionTypes.SUBMIT: {
      const { formData } = state;
      formData.title = formData.title.trim();
      formData.text = formData.text.trim();

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
