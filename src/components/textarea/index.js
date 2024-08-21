import './index.css'
import { useController } from 'react-hook-form';

export const BaseTextarea = ({ name, control, label, isRequired = true, ...rest }) => {
    const {
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
    } = useController({
        name,
        control,
        defaultValue: rest.defaultValue || '',
    });
    return <div className="textarea-wrapper">
        <label>
            {isRequired && <span style={{ color: 'red' }}>*</span>}
            {' '}
            {label}
        </label>
        <textarea
            {...rest}
            name={name}
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
        />
        {<span className='baseInput-error' >{error && error.message}</span>}
    </div>
}