import styles from './JournalFormField.module.scss';
import cn from 'classnames';

function JournalFormField({
  children, icon, label, wide, invalid, grow,
}) {
  return (
    <label className={cn(
      styles['journal-form-field'],
      { [styles['journal-form-field_grow']]: grow },
    )}
    >
      <div className={cn(
        { [styles['journal-form-field__wrap_invalid']]: invalid },
        { [styles['journal-form-field__wrap_wide']]: wide },
        styles['journal-form-field__wrap'],
      )}
      >
        {icon && (
          <div className={styles['journal-form-field__icon']}>
            {icon}
          </div>
        )}

        {label && (
          <div className={styles['journal-form-field__label']}>
            {label}
          </div>
        )}

        {children}
      </div>
    </label>
  );
}
export default JournalFormField;
