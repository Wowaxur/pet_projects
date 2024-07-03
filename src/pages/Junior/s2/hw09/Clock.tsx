import React, {useEffect, useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
function Clock() {
    const [timerId, setTimerId] = useState<NodeJS.Timer | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)
    const [isProcessing, setIsProcessing] = useState(false);


    const start = () => {
        if (!timerId) {
            const newTimerId = setInterval(() => {
                setDate(new Date());
            }, 1000);
            setTimerId(newTimerId); // Сохраняем ID таймера
            setIsProcessing(true); // Обновляем состояние, указывающее на то, что таймер запущен
        }
    };

    const getTwoDigitString = (num: number) => num < 10 ? '0' + num : num

    const secondsString = getTwoDigitString(date.getSeconds())

    const minuteString = getTwoDigitString(date.getMinutes())

    const hourString = getTwoDigitString(date.getHours())

    const stop = () => {
        if (timerId) {
            clearInterval(timerId);
            setTimerId(undefined); // Обнуляем ID таймера в состоянии
            setIsProcessing(false); // Обновляем состояние, указывающее на то, что таймер остановлен
        }
    };

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
        (setShow(true))
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        setShow(false)
    }
    let formatter1 = new Intl.DateTimeFormat("ru", {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });


    const stringTime =  <div>
        <span>{hourString}</span>
        :
        <span>{minuteString}</span>
        :
        <span>{secondsString}</span>
    </div> || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты

    const stringDate = <div>{formatter1.format(date)}</div> || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    const stringDay = <div>{daysOfWeek[date.getDay()]}</div> || <br/>;
    const stringMonth = <div>{monthNames[date.getMonth()]}</div> || <br/>;
    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more} onFocus={onMouseEnter} onBlur={onMouseLeave}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={isProcessing}// пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!isProcessing} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
