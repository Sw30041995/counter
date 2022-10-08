import React, {useState} from 'react';
import s from './Counter.module.css';
import {Button} from "./Button";

type CounterPropsType = {
    value: number
    callbackFn: (value: number) => void
}

export const Counter = ({value, callbackFn, ...props}: CounterPropsType) => {

    const [error, setError] = useState<boolean>(false)

    const increment = () => {
        if (value < 10) {
            callbackFn(++value)
        }
        if (value === 10) {
            setError(true)
        }
    }

    const reset = () => {
        callbackFn(0)
        setError(false)
    }

    const showError = error ? s.error : ''

    return (
        <div className={s.container}>
            <div className={`${s.scoreBoard} ${showError}`}>
                {value}
            </div>
            <div className={s.buttonContainer}>
                <Button title={'inc'} value={value} disabled={10} callback={increment}/>
                <Button title={'reset'} value={value} disabled={0} callback={reset}/>
            </div>
        </div>

    )
}