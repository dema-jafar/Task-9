import React from 'react'
import { useState , useEffect } from 'react'
import "./Hero.css"

export default function Hero() {
    const [count, setCount] = useState(0);
    const [visible,IsVisible] = useState(false);
    const [popUp,setPopUp] = useState(false);
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('black');

    useEffect(()=>{
        setMessage("The page has loaded")
        setPopUp(true)
    },[])

    function IncreaseTheCounter() {
        if (count >= 0 & count < 10) {
            setCount(count+1);
        }

        if (count >= 10 & count < 100) {
            setCount(count+10);
        }
        if (count >= 100 & count < 1000) {
            setCount(count+100);
        }
    }

    function DecreaseTheCounter() {
        if (count <= 1000 & count > 100) {
            setCount(count-100);
        }

        if (count <= 100 & count > 10) {
            setCount(count-10);
        }
        if (count <= 10 & count > 0) {
            setCount(count-1);
        }
    }

    useEffect(() =>{
        if (count == 0) {
            setColor('#3ebbbb');
            IsVisible(false);

        }
        if (count == 10) {
            setColor('#a66fda');
            setPopUp(true);
            setMessage("Count reached 10");
        }
        if (count == 100) {
            setColor('#cc8383');
            setPopUp(true);
            setMessage("Count reached 100");
        }
        if (count == 1000) {
            setColor('#7272d3');
            setPopUp(true);
            setMessage("Count reached 1000");
            IsVisible(true);
        }
    })



    return (
        <section className='hero' style={{backgroundColor: color}}>
            <div className="heroContent">
                <button onClick={IncreaseTheCounter}>Increase Counter</button>
                <button className={visible ? "" : "hide"} onClick={DecreaseTheCounter}>Decrease Counter</button>
                <div className='count'><span>{count}</span></div>
                <div className={popUp ? "showMessage" : "message"}>
                    <p>{message}</p>
                    <span className='close' onClick={() =>{setPopUp(false)}}>x</span>
                </div>
            </div>
        </section>
    )
}
