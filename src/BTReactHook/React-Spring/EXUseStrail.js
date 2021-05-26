import React, { useState } from 'react'
import { animated, useTrail } from 'react-spring'



const items = [
    { titles: "Vu Duy A", content: "Dep Trai A" },
    { titles: "Vu Duy B", content: "Dep Trai B" },
    { titles: "Vu Duy C", content: "Dep Trai C" },
    { titles: "Vu Duy D", content: "Dep Trai D" },
]
function EXUseStrail() {

    let [toggle, setToggle] = useState(true)

    let [propsUseTraill, set] = useTrail(items.length, () => {
        return {
            opacity: toggle ? 1 : 0,
            x: toggle ? 0 : 20,
            height: toggle ? 80 : 0,
            color: 'red',
            from: { opacity: 0, x: 20, height: 0, color: 'green' },
            config: { duration: 1000 }
        }
    })
    console.log(propsUseTraill);
    console.log(items);
    set({
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 20,
        height: toggle ? 80 : 0,
        color: 'red',
        from: { opacity: 0, x: 20, height: 0, color: 'green' },
        config: { duration: 1000 }
    })
    return (
        <div>
            <div>
                <button onClick={() => {
                    setToggle(!toggle)
                }}>setStatus</button>
                <button onClick={() => {
                    set({ color: 'pink' })
                }}>setColor</button>
            </div>
            {propsUseTraill.map((item, index) => {
                return <animated.h1 key={index} style={item}>{items[index].titles}</animated.h1>
            })}

        </div>
    )
}

export default EXUseStrail
