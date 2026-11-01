import { useEffect, useReducer, useRef } from 'react';
import Button from '../../Button/Button';
import DeleteSvg from '@/assets/svg/delete.svg?react';
import CalendarSvg from '@/assets/svg/calendar.svg?react';
import FileSvg from '@/assets/svg/file.svg?react';
import styles from './JournalForm.module.scss';
import { formReducer, actionTypes, INITIAL_STATE } from './JournalForm.state';
import Input from '../../form/Input/Input';
import TextArea from '../../form/TextArea/TextArea';

function JournalForm({ onSubmit }) {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const {
    validState, formData, isReadyToSubmit,
  } = formState;
  const titleRef = useRef();
  const dateRef = useRef();
  const textRef = useRef();

  const focusFirstInvalidField = (validState) => {
    switch (true) {
      case !validState.title:
        titleRef.current.focus();
        break;
      case !validState.date:
        dateRef.current.focus();
        break;
      case !validState.text:
        textRef.current.focus();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    let timerId;
    if (Object.values(validState).some((state) => !state)) {
      focusFirstInvalidField(validState);

      timerId = setTimeout(() => {
        dispatchForm({ type: actionTypes.RESET_VALIDITY });
      }, 2000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [validState]);

  useEffect(() => {
    if (isReadyToSubmit) {
      onSubmit(formData);
      dispatchForm({ type: actionTypes.RESET_FORM_DATA });
    }
  }, [isReadyToSubmit, onSubmit, formData]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatchForm({ type: actionTypes.SUBMIT });
  };

  const onControlChange = (event) => {
    dispatchForm({
      type: actionTypes.UPDATE_FORM_DATA,
      payload: {
        name: event.target.name,
        value: event.target.value,
      },
    });
  };

  return (
    <form className={styles['journal-form']} onSubmit={submitHandler}>
      <div className={styles['journal-form__head']}>
        <Input
          name="title"
          type="text"
          ref={titleRef}
          value={formData.title}
          placeholder="Заголовок"
          invalid={!validState['title']}
          appearance="title"
          onChange={onControlChange}
        />

        <button type="button" className={styles['journal-form__delete-button']}>
          <DeleteSvg />
        </button>
      </div>

      <div className={styles['journal-form__fields-box']}>
        <Input
          invalid={!validState['date']}
          icon={<CalendarSvg />}
          label="Дата"
          name="date"
          type="date"
          ref={dateRef}
          value={formData.date}
          onChange={onControlChange}
        />

        <Input
          icon={<FileSvg />}
          label="Метки"
          name="tag"
          type="text"
          value={formData.tag}
          onChange={onControlChange}
        />
      </div>

      <TextArea
        invalid={!validState['text']}
        grow={true}
        name="text"
        placeholder="Моё воспоминание..."
        ref={textRef}
        value={formData.text}
        onChange={onControlChange}
      />

      <Button type="submit">Сохранить</Button>
    </form>
  );
}

export default JournalForm;
