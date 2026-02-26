import React, { useEffect, useState } from 'react'
import Timer from './timer'


function Main() {
    const [bombs, setCounts] = useState(5)
    const [timer, setTimer] = useState("00:01:00");
    const [end, setEnd] = useState(false)
    const [win, setWin] = useState(false)
    const [randoms, setRandoms] = useState(new Set())
    const [rest, setRest] = useState(new Date())
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
    }, [rest])
    if (bombs === 0 && end === false) {
        setEnd(true)
        console.log(timer);
        setWin(true)
    }
    console.log(timer);
    useEffect(() => {
        if (timer === "00:00:00") {
            setEnd(true)
        }
    }, [timer])

    return (
        <div id='main'>
            <div id='header'>
                <div className='explein'>
                    <div className='imogies'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAWCAYAAAAmaHdCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMsSURBVDhPZVRdTxNBFD3d2fIhFCgVkJRAImLikwoFidGaQMJPIMozb/wFSfgj/AjRJ2IkxD4QggIvEMuHJKBiIEIMtNvubtd7rsxCdJKzM3c+zj33zp1N9Dx4GuGqRbUITiKh41qthoSMiTAM4TgOoiiCcQ3CqzXabI5+pdkJ9oTdRBhjlLSxsRHWo3VA/EfCSdvTO3tLNDMzg3w+j/r6+ngPm0MPbHaCtlVA0G5oaEAymURHRwemp6cxO/sanZ2dsWPT0tE7Jzpk83UYFrRbWlKYmJhAc3MzFhcXUS+Ea2ufsLW1pQSqNnv/mdIZI4aQRTU/9k6iyclJjI2NaTjfj39g4e07fF5fR6lUih2ZVHt2jgRB4AsrbyJAU1MT0uk0stksfN/H0dGRKuns6kIuN6Lzu7u7uLi40DAT3fdGVQllJV0HL/LPMT4+HsfMTWdnZ9je3kbJK2NoaBi3mptwenqK+fl57O3tIdF1d0RJUqkUXr2cRG5oEK7rqlSGRXL2xC8hW1pexuPBQaysrKBQKGiYiTv9w5ExLqampjD6ZARGQrKJJW62QIru58kJ3iwsYHNzUx2w6RX3998VmYOSl0Crk70F7Ri1EOm2tOQlp2HaK3bCWoDc8BDKXkknudnKJ2gzuZbQlwvo7u7W5HKdZ1RPe3u7Gr5fvfYquKmMRHaeeRgYGNAzSsLKZ6H5vhwQZp+QjVWBHbOvClG1KorEpoJMJqMhkdChF6/sIQxCKTWpE9kQELKZqDAU6UOGKuD+arWqCtjicFjCXKxUKnH8/4bAMdcJKjk+PlYyrsktOdjY2MD5+bmo+ZsDG6sd89BNJ2Up+Z3ijuSCT0USwphYkevyHryKFx+2BDxsbSWTvBS/FPFNngKriNCc1NXVYXV1VUu7XC7HBPTMdc/zVAHlHx4eovCxgBpJSS65NC2Znjl6IA6+HsBNumhtbdVqtSpIQBSLRSy9/4DfErp4gSuVTqJEpvdRZN8H30wgVdklr7Wvrw9tbW06d3l5if39fU2m3LmqZBroQN/O7d6H/BPJf0T+cBKgkUP0yo0kJ2izN46B4XVqJuQrc4gi/AHtr36hvfUcdwAAAABJRU5ErkJggg==" alt="" />
                        <p className='withe'>Bombs Remaining</p>
                    </div>
                    <h1 className='withe font'>{bombs}</h1>
                </div>
                <div className='explein'>
                    <div className='imogies'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAWCAYAAAAinad/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQ3SURBVDhPTVRdTxtXED27axsbf2AbYz6CsSnQuJWqohaeqkZVI0pREkJbQfMzqqpPVSvxO5CqVjxEbUTbHwCqkgZeUAgvNAjSlA8TQfiIDQbM2mtvz4xByqyu13vv3HPPnJk7xlvvf+qC5rquDjHDMOAzTbi1Ghy3Bo/HU18zLDhVB5ZlcQ0wTUt9a/STOVM2y4c4y4KYgFimgaZICG2JZsSbmtCaTKJKIFMOcQ36mvyu6hATDGX2JiOZdCoVjN36HGN3R1HjkmV5cHxaxDfffoeGhgCqZFWVAy8Pl30yTAFS1EsgMQbM3xoi4RASzXEyjMDvC+ia41TVTxi+aYJjRZOZyXp4roYhf2WcFU9QdSqIRJrw4r8XmJ2dw/Pn/8Lr89b1E9HU6lrLAVa0tWuS/xTIQ52ikSCGbt7E0PAQ3s5eRzQWRUPAr8zFZ39vD3TTA12DEZGg/mckRurdj1wTsurik49vYHz8K0SjUVzYJZydnTIsB42BIAKBRn6fYWtrC/fv/4rcy5cE4z6aZFLMyLx3w61WHHxGJl+OfQH74hxzc3N48mQRr/Ov0dXVhULhGKFgGKOjo+jt7UM+X8BPv/yM7dyOgsiBAmiFmzsn+/r6cO/e1zg9OcHU1BSWl5dh2xfMWBUTExNoaUni0aO/sbKyAr/fj56eXiRbW7G2toYKMy8SaJ35GnwYHh5WAaenp7G9vaWCyuP1erVgr3VcU5BisYiZmd+xtLREsCQGBgc1q1dhmu3t7ZCxurqKzc1NLUJNOxMmbwHJvpPVA4WBbdvM7CyOj4+RzWYRDAZ1Xsulu7tbNwnYFWXZ4BBUWMXjcZ1fX19XP5/Ph5cUP7edQ7CxEYlEQoFknxkOh5Xi0dGRspIQ5R0IBJjZcf1+8NsD1UdMxBYrFAoaXhOvmsrCYZ4z3eKQSLRQcK0WHcXTc8z88Se+/+FH/PXwIRwmwyED3mLYFbvOho8phUZJPJKAvd09Rc1ez8JDwctlnkyHCq/Nq1f7KJUueD/ZBBiiZFeGaZmIxaNK4mB/n2CMhv7mxsYGTlgSrUx1JpNRXVwyFA2kM8ggOjeKhl5m2Id0OoNUKq3S7O7uKktNXKlUwvz8vIo9MjKigqsGBKyyPdT45if1kZ4Gdg0/7twZZSK8WFxcJPOSHqxFG4x1TOZyOXR2dqKtrU3LJJ/Po8DU68XnI+1GNqR5G27dvk2fDjz75xkeP57XSK6yabT1DJKIi0amWa5LOp3W4pT071MPAZbilflUKoVYLKaMFhYWNDQBuapNI9n9oYIJTQl1YGAA/f39CIVCqpWcalFw2y7rJX/6dAk7Ozu6WfUVSS73K1h9A1PLxXK5zB4W4QVP652UjElNHRwc4PDwUGtMWbBhmNKLaPVkcSS7PyBYna5slDd1Zkfi4uXpNenT0qVkjSxkTgUn4zoc+7Lr4n9VLDsQm4qSkgAAAABJRU5ErkJggg==" alt="" />
                        <p className='withe'>Time Remaining</p>
                    </div>
                    <Timer props={{ timer, setTimer, end ,rest}} />
                    <h1 className='withe font'>{timer}</h1>
                </div>
                <div className='explein'>
                    <div className='imogies'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAO1SURBVDhPPVRLbxNXFP7m3nl47DwcQyGEqF2UINpdSVhUUcwChHioCBaIqlJ3VTe0avkFtFlGqvgRrQgChBCRQKKoEju23bUST3VFEuzYsT2eOzN3+p07TUc+muN7z5xzvu88vCOfnS75QCkP8ra2hO/71K37zx+KooDW2ononuc5G2OMO7NFZWethQKowdIwpyEoclnwrESeZzTKneM8r94i4izLMvfeOxdnojPDU2WjHmNlZVm8o15vQNHw4cMNzMw0cbLdRp7lznhiagrr6+tYXFzC0tIi+r0elKfQ7fVx5849BGEAXzGtQx/sw/fffA1NmBYaWzsD/P74MQ4f2IcrF8+izA2IDdvvu9i4v45PFz7EhdNtQjUIeP702XM6Jm1EpcAIGXkZJwZJkmA4GsEQjlKKPipIwltmqjPhWFjKSVFJPc8LhGHoamBtAWUIZ2q65XwXpUJuPURxA6QeJYOJZDzzdIioPkE6IqeLkDFAacSNuuPQFezj42dKRaizMxMINatXi1HQ+NXrt/yvcPjgfoaySCRDHWCLsFv7W5is11nLAmacuICv3v5TZSppW6lcEKAWx4gpAfW9iNIDillMTk6xSC2kdFyLYkxPNzHRaKDVaqHZbP7/jS+4P5qfw4/XvkUUKAepn2S4sbqKA60ZXP/hOxIuXn30ByP89fMqVpaXceH8OZSOxxx/v3iDP2/85HpSuERuUlhWsh4F0KyWVE8ztyj0GVkjZBsJbKFAS1MLdYKKb7mTKknBpDeVZRT5UCJlWeqiCjcicsfS8IyTQq3gvfLYWrzjPzqy8AgzCkLX3ALblxHb3N7Gb7fvIpYM2SqZBfq7fZIc4MHGI5k9N26ZTENh8eLlSzx5+geToCEddfoDOidSmZT5Tz4v02ToIDE0O12xQHSac5apR6y6QJOsoqjGfh1z5EI3dg4m7QJWt8upEQ69uaMnyvm5WXxx/qxzWGNWg8EQv966hYVjx3D1y68cPMkwHRusra2h3T6JS5cuO86CIMIbtswvN29WRZHRkT4UcmvkMiJsWRChH8CkqeM3JDeaBWG53LtWi9wycRuKmRtyKy1TFYVKQdnbJCOOnvSfbBoZ/HRM4/9WmTzyUbWFqj41mXE0yCMUKCG54D7b7nTR2ekRbsJ+GyIlwcPRGB2ev3u3hW63hyH7sCw97O6OsEPbDqdmc/M9etw2EkDEm104UXqM7nEHSuv4hCTzP07Zi+RHqq54J2MljywR39cUoYYZMauC3xsmoLXGv0hnKfDvrXWAAAAAAElFTkSuQmCC" alt="" />
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
                setArr([])
                setCounts(5)
                setEnd(false)
                setRandoms(new Set())
                setWin(false)
                setRest(new Date())
            }}>Restart Game</button>
            {end && <div id='end'>{win && <h1 className='font'>you win!!👋👋</h1>}{!win && <h1 className='font'>you lost!!👎👎</h1>}</div>}
        </div>
    )
}

export default Main
