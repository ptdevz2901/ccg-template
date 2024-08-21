import React from 'react';
import { useController } from 'react-hook-form';
import './index.css'
const BaseInput = ({ name, control, label, isRequired = true, ...rest }) => {
    const {
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
    } = useController({
        name,
        control,
        defaultValue: rest.defaultValue || '',
    });

    return (
        <div className='baseInput-wrapper'>
            <label>
                {isRequired && <span style={{ color: 'red' }}>*</span>}

                {' '}
                {label}
            </label>
            <input
                {...rest}
                name={name}
                ref={ref}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
            />
            {<span className='baseInput-error' >{error && error.message}</span>}
        </div>
    );
};

export default BaseInput;
