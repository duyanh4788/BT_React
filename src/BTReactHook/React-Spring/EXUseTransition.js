import React, { useState } from 'react'
import { animated, useTransition } from 'react-spring'

function EXUseStransition() {

    const [items, setItems] = useState([])

    const propsUse = useTransition(items, {
        from: { x: -100, y: 800, opacity: 0 },
        enter: item => async (next) => {
            await next({ y: item.y, opacity: 1, delay: item.delay })
            await next({ x: 100, width: 300, height: 300 })
        },
        leave: { x: 400, y: 700, opacity: 0 },
    })

    return (
        <div className='container'>
            <button className='btn btn-success' onClick={() => {
                setItems(items => items.length ? [] : [
                    { y: 0, delay: 200 }, { y: 20, delay: 400 }, { y: 40, delay: 600 },
                ])
            }}>mout</button>
            {propsUse((style, item) =>
                item ? <animated.div style={style} className='bg-danger py-5 mt-1 w-50 rounded' /> : ""
            )}

        </div>
    )
}

export default EXUseStransition


/**
 *  const propsUse = useTransition(items, {
        from: { transform: 'translate3d(0,-40px,0' },
        enter: { transform: 'translate3d(0,0px,0' },
        leave: { transform: 'translate3d(0,-40px,0' },
    })
 */
