import './index.css'
import { useController } from 'react-hook-form';
export const BaseSelect = ({ options = [], name, control, label, isRequired = true, ...rest }) => {
    const {
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
    } = useController({
        name,
        control,
        defaultValue: rest.defaultValue || '',
    });
    return <div className="baseSelect-wrapper">
        <label>
            {isRequired && <span style={{ color: 'red' }}>*</span>}

            {' '}
            {label}
        </label>
        <select
            {...rest}
            name={name}
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
        >
            {options.map((option) => {
                return <option value={option.value} key={option.value}>{option.label}</option>
            })}
        </select>
        {<span className='baseInput-error' >{error && error.message}</span>}
    </div>
}