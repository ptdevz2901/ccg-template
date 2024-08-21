import { useController } from 'react-hook-form';
import './index.css'
import { useEffect } from 'react';

export const BaseCheckbox = ({ name, control, label, isRequired = true, ...rest }) => {
    const {
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
    } = useController({
        name,
        control,
        defaultValue: rest.defaultValue || '',
    });


    return <div className="checkbox-wrapper">
        <input
            {...rest}
            name={name}
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            type='checkbox'
        />
        {label}
    </div>
}