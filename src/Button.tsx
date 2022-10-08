import React from 'react';
import s from "./Counter.module.css";

type ButtonPropsType = {
    title: string
    value: number
    callback: () => void
    disabled: 0 | 10
}

export const Button = ({title, value, callback, disabled}: ButtonPropsType) => {

    return (
        <div className={s.button}>
            <button disabled={value === disabled} onClick={callback}>{title}</button>
        </div>
    )
}