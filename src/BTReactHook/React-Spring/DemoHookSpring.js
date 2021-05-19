import React from 'react';
import { useSpring, animated } from 'react-spring'

function DemoHookSpring(props) {
    const userDemo = useSpring({ to: { opacity: 1, color: 'red' }, from: { opacity: 0, color: 'blue' }, config: { duration: 1000 } })
    const changeNumber = useSpring({ num: 200, color: 'black', from: { num: 10, color: 'red' }, config: { duration: 1000 } })
    const scrollTop = useSpring({ scroll: 100, from: { scroll: 0 }, config: { duration: 1000 } })
    let changeColor = useSpring({ to: { color: 'rgb(131,1111,255' }, from: { color: 'rgb(238, 99, 99)' }, config: { duration: 20000, delay: 0 } })


    return <>
        <animated.div style={userDemo}>I will fade in</animated.div>
        <div className="card">
            <img className="card-img-top" src="holder.js/100x180/" alt='tes' />
            <div className="card-body">
                <h4 className="card-title">Title</h4>
                <p className="card-text">Text</p>
            </div>
        </div>
        <h1>Change Number</h1>
        <animated.h1>{changeNumber.num}</animated.h1>
        <animated.p style={{ fontSize: changeNumber.num, color: changeNumber.color }}>A</animated.p>
        <h1>Scroll</h1>
        <animated.div scrollTop={scrollTop.scroll}>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
        </animated.div>
        <animated.h1 style={{ color: changeColor.color }}>hello word</animated.h1>
    </>
}

export default DemoHookSpring
