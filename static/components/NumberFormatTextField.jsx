import React from 'react';
import NumberFormat from 'react-number-format';


function NumberFormatTextField(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={target => {
                onChange({
                    target: {
                        value: Number(target.value),
                    },
                });
            }}
            thousandSeparator
        />
    );
}

export default NumberFormatTextField;