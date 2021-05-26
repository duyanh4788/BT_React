import React from 'react'
import { animated, useSprings } from 'react-spring'

function EXuseSpring() {
    let arrOpacity = [
        { opacity: 0.1, color: 'red', content: 'n v a', num: 100 },
        { opacity: 0.3, color: 'green', content: 'n v b', num: 200 },
        { opacity: 0.5, color: 'blue', content: 'n v c', num: 300 },
        { opacity: 0.7, color: 'orange', content: 'n v d', num: 400 },
        { opacity: 1, color: 'purple', content: 'n v e', num: 500 },
    ]
    console.log(arrOpacity);
    let propsAnimationUsePrings = useSprings(arrOpacity.length, arrOpacity.map(item => {
        return {
            opacity: item.opacity,
            color: item.color,
            content: item.content,
            num: item.num,
            from: { opacity: 0, color: 'black', content: item.contetn, num: 0 },
            config: { duration: 3000 }
        }
    }))
    console.log(propsAnimationUsePrings);

    const renderContent = (propsAnimation) => {
        let arrAnimation = [];
        for (let keys in propsAnimation) {
            if (keys === "content" || keys === "num") {
                arrAnimation.push(<animated.span key={keys} style={propsAnimation}>{propsAnimation[keys]}</animated.span>)
            }
        }
        return arrAnimation
    }
    return (
        <div>
            {propsAnimationUsePrings.map((item, index) => {
                return (
                    <div key={index}>
                        {renderContent(item)}
                    </div>
                )
            })}
        </div>
    )
}

export default EXuseSpring
