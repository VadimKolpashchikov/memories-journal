import styles from './FormField.module.scss';
import cn from 'classnames';

function FormField({
  children, icon, label, wide, invalid, grow,
}) {
  return (
    <label className={cn(
      styles['form-field'],
      { [styles['form-field_grow']]: grow },
    )}
    >
      <div className={cn(
        { [styles['form-field__wrap_invalid']]: invalid },
        { [styles['form-field__wrap_wide']]: wide },
        styles['form-field__wrap'],
      )}
      >
        {icon && (
          <div className={styles['form-field__icon']}>
            {icon}
          </div>
        )}

        {label && (
          <div className={styles['form-field__label']}>
            {label}
          </div>
        )}

        {children}
      </div>
    </label>
  );
}
export default FormField;
