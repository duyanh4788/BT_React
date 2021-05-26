import React, { useRef, useState } from 'react'
import { useSpring, useTransition, useChain, animated } from 'react-spring'

export default function EXUseChain() {
    let [arrContent, setArrContent] = useState([
        { id: 1, title: 'Vũ Duy Anh 1', content: "Đẹp Trai A" },
        { id: 2, title: 'Vũ Duy Anh 2', content: "Đẹp Trai B" },
        { id: 3, title: 'Vũ Duy Anh 3', content: "Đẹp Trai C" },
    ])
    // tạo useSpring animation
    const springRef = useRef()
    const propsSpring = useSpring({
        opacity: 1, width: '100%', height: '100%', from: { opacity: 0, width: '0%', height: '0%' }, config: { duration: 500 }, ref: springRef
    })
    // tạo 1 useTransition
    const transitionRef = useRef()
    const propsTransitions = useTransition(arrContent, item => item.id, {
        from: { transform: 'translate3d(0,-40px,0' },
        enter: { transform: 'translate3d(0,0px,0', opacity: 1, width: '100%', height: '100%' },
        leave: { transform: 'translate3d(0,-40px,0', opacity: 0, width: '0%', height: '0%' },
        config: { duration: 500 },
        ref: transitionRef
    })
    useChain([springRef, transitionRef])
    return (
        <>
            <animated.div style={propsSpring}>
                {propsTransitions.map(({ item, key, props }) => {
                    return (
                        <animated.div key={key} style={props} className='mt-2 mb-2 p-3 bg-dark text-white text-center'>
                            <div className='text-right'>
                                <button className='btn btn-danger' onClick={() => {
                                    setArrContent([...arrContent.filter(article => article.id !== item.id)])
                                }}>x</button>
                            </div>
                            {/* <h3>{item.title}</h3>
                            <p>{item.content}</p> */}
                        </animated.div>
                    )
                })}
            </animated.div></>
    )
}
