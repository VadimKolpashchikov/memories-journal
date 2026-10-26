import { useEffect, useReducer } from 'react';
import Button from '../../Button/Button';
import JournalFormField from '../JournalFormField/JournalFormField';
import DeleteSvg from '@/assets/svg/delete.svg?react';
import CalendarSvg from '@/assets/svg/calendar.svg?react';
import FileSvg from '@/assets/svg/file.svg?react';
import styles from './JournalForm.module.scss';
import { formReducer, actionTypes, INITIAL_STATE } from './JournalForm.state';

function JournalForm({ onSubmit }) {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const {
    validState, formData, isReadyToSubmit,
  } = formState;

  useEffect(() => {
    let timerId;
    if (Object.values(validState).some((state) => !state)) {
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
    }
  }, [isReadyToSubmit, onSubmit, formData]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatchForm({
      type: actionTypes.SUBMIT,
      payload: Object.fromEntries(new FormData(e.target)),
    });
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
        <JournalFormField invalid={!validState['title']} wide={true}>
          <input
            name="title"
            type="text"
            value={formData.title}
            placeholder="Заголовок"
            onChange={onControlChange}
          />
        </JournalFormField>

        <button type="button">
          <DeleteSvg />
        </button>
      </div>

      <div className={styles['journal-form__fields-box']}>
        <JournalFormField
          invalid={!validState['date']}
          icon={<CalendarSvg />}
          label="Дата"
        >
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={onControlChange}
          />
        </JournalFormField>

        <JournalFormField icon={<FileSvg />} label="Метки">
          <input
            name="tag"
            type="text"
            value={formData.tag}
            onChange={onControlChange}
          />
        </JournalFormField>
      </div>

      <JournalFormField invalid={!validState['text']} grow={true}>
        <textarea
          name="text"
          placeholder="Моё воспоминание..."
          value={formData.text}
          onChange={onControlChange}
        />
      </JournalFormField>

      <Button type="submit">Сохранить</Button>
    </form>
  );
}

export default JournalForm;
