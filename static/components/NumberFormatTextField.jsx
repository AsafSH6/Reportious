import React from 'react';
import NumberFormat from 'react-number-format';


function NumberFormatTextField(props) {
    const { inputRef, onChange, ...other } = props;

    const formatter = (val) => {
        let formattedValue = val;
        if (formattedValue.length > 1 && formattedValue.startsWith('0')) {
            formattedValue = formattedValue.slice(1);
        }
        return Number(formattedValue).toLocaleString();
    };

    return (
        <NumberFormat
            {...other}
            format={formatter}
            getInputRef={inputRef}
            onValueChange={values => {
                return onChange({
                    target: {
                        value: Number(values.value),
                    },
                });
            }}
            thousandSeparator
        />
    );
}

export default NumberFormatTextField;