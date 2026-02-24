import React, { useState } from 'react'
import Timer from './timer'

function Main() {
    const [bombs,setCounts] = useState(5)
    const [timer, setTimer] = useState("00:00:00");
    const [randoms,setRandoms] = useState([])
    if(randoms.length === 0){
         for(let i = 0;i <5;i++){
            randoms.push()
         }
    }
    
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
                <Timer props={{timer,setTimer}}/>
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
        <div></div>
    </div>
  )
}

export default Main
