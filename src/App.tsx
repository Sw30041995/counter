import React, {useState} from 'react';
import s from './App.module.css';
import {Counter} from "./Counter";
import {CounterSettings} from "./CounterSettings";

function App() {

    const [count, setCount] = useState<number>(0)

    return (
        <div className={s.App}>
            <CounterSettings/>
            <Counter value={count} callbackFn={setCount}/>
        </div>
    );
}

export default App;
