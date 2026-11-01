import FormField from '../FormField/FormField';
import styles from './Input.module.scss';
import cn from 'classnames';

function Input({
  type = 'text',
  className,
  ref,
  invalid,
  appearance,
  label,
  icon,
  ...props
}) {
  return (
    <FormField
      invalid={invalid}
      label={label}
      wide={appearance === 'title'}
      icon={icon}
    >
      <input
        {...props}
        type={type}
        className={cn(className, styles['input'])}
        ref={ref}
      />
    </FormField>
  );
}

export default Input;
