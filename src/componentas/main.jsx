import React, { useEffect, useState } from 'react'
import Timer from './timer'


function Main() {
    const [bombs, setCounts] = useState(5)
    const [timer, setTimer] = useState("00:01:00");
    const [end, setEnd] = useState(false)
    const [win, setWin] = useState(false)
    const [randoms, setRandoms] = useState(new Set())
    const [arr, setArr] = useState([])
    function ran() {
        while (randoms.size < 5) {
            const num = Math.floor(Math.random() * 80)
            randoms.add(num)
        }
    }
    function fullArr() {
        while (arr.length < 60) {
            for (let i = 0; i < 80; i++) {
                if (randoms.has(i)) {
                    arr.push("bombe")
                } else {
                    arr.push("x")
                }
            }
        }
    }
    useEffect(() => {
        ran()
        fullArr()
    }, [])
    if (bombs === 0 && end === false) {
        setEnd(true)
        console.log(timer);
        setWin(true)
    }
    console.log(timer);
    useEffect(()=>{
             if(timer === "00:00:00"){
        setEnd(true)
    }
    },[timer])

    return (
        <div id='main'>
            <div id='header'>
                <div className='explein'>
                    <div className='imogies'>

                        <p className='withe'>Board Size</p>
                    </div>
                    <h1 className='withe font'>10x8</h1>
                </div>
            </div>
            <div id='ex2'>
                <p className='withe'>Locate and neutraloza all bombs before time runs out.</p>
            </div>
            <div id='board'>
                {arr.map((str) => {
                    if (str === "x") {
                        return (
                            <div className='all' onClick={(e) => {
                                if (!end) {
                                    e.target.className += " bacx"
                                }
                            }}></div>
                        )
                    } else {
                        return (
                            <div className='all' onClick={(e) => {
                                if (!end) {
                                    end == false && setCounts(bombs - 1)
                                    e.target.className += " bacb"
                                }
                            }}></div>
                        )
                    }
                })}
            </div>
            <button id='rest' onClick={() => {
                window.close("http://localhost:5173/")
                window.open("http://localhost:5173/")
            }}>Restart Game</button>
            {end && <div id='end'>{win && <h1 className='font'>you win!!👋👋</h1>}{!win && <h1 className='font'>you lost!!👎👎</h1>}</div>}
        </div>
    )
}

export default Main
