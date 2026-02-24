import React, { useEffect, useState } from 'react'
import Timer from './timer'


function Main() {
    const [bombs, setCounts] = useState(5)
    const [timer, setTimer] = useState("00:00:00");
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
    return (
        <div id='main'>
            <div id='header'>
                <div className='explein'>
                    <div className='imogies'>
                        <img src="src\pictutures\Screenshot 2026-02-24 095651.png" alt="" />
                        <p className='withe'>Bombs Remaining</p>
                    </div>
                    <h1 className='withe font'>{bombs}</h1>
                </div>
                <div className='explein'>
                    <div className='imogies'>
                        <img src="src\pictutures\Screenshot 2026-02-24 095724.png" alt="" />
                        <p className='withe'>Time Remaining</p>
                    </div>
                    <Timer props={{ timer, setTimer }} />
                    <h1 className='withe font'>{timer}</h1>
                </div>
                <div className='explein'>
                    <div className='imogies'>
                        <img src="src\pictutures\Screenshot 2026-02-24 095741.png" alt="" />
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
                            <div className='all' onClick={(e)=>{
                                e.target.className += " bacx"
                            }}></div>
                        )
                    } else {
                        return (
                            <div className='all'  onClick={(e)=>{
                                setCounts(bombs-1)
                                e.target.className += " bacb"
                            }}></div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Main
