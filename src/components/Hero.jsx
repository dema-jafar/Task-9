import React from 'react'
import { useState , useEffect } from 'react'
import "./Hero.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import {Container} from "react-bootstrap"

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
            setColor('black');
            IsVisible(false);

        }
        if (count == 10) {
            setColor('blue');
            setPopUp(true);
            setMessage("Count reach 10");
        }
        if (count == 100) {
            setColor('red');
            setPopUp(true);
            setMessage("Count reach 100");
        }
        if (count == 1000) {
            setColor('green');
            setPopUp(true);
            setMessage("Count reach 1000");
            IsVisible(true);
        }
    })



    return (
        <Container className='hero' style={{backgroundColor: color}}>
            <div className="heroContent">
                <Button variant="danger" onClick={IncreaseTheCounter}>Increase Counter</Button>
                <Button variant="danger" className={visible ? "ms-3" : "hide"} onClick={DecreaseTheCounter}>Decrease Counter</Button>
                <div className='text-center mt-3 text-light'><span>{count}</span></div>
                <div className={popUp ? "showMessage" : "message"}>
                    <p>{message}</p>
                    <span className='close' onClick={() =>{setPopUp(false)}}>x</span>
                </div>
            </div>
        </Container>
    )
}
