import FormField from '../FormField/FormField';
import styles from './TextArea.module.scss';
import cn from 'classnames';

function TextArea({
  className,
  ref,
  invalid,
  grow,
  ...props
}) {
  return (
    <FormField invalid={invalid} grow={grow}>
      <textarea
        {...props}
        className={cn(className, styles['textarea'])}
        ref={ref}
      />
    </FormField>
  );
}

export default TextArea;
