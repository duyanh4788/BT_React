import React from "react";
import { animated, useSpring } from "react-spring";
import "./css/XucXacItem.css";

function Dice(props) {
  const { dice } = props;

  const [propsDice, set] = useSpring(() => {
    return {
      to: {
        xyz: [360, 360, 360],
      },
      from: {
        xyz: [0, 0, 0],
      },
      config: { duration: 1000 },
      reset: true,
    };
  });
  set.start({ xyz: [1800, 1800, 1800] });
  return (
    <>
      <animated.div
        className="scene"
        style={{
          transform: propsDice.xyz.to(
            (x, y, z) => `rotate(${x}deg) rotate(${y}deg)rotate(${z}deg)`
          ),
        }}
      >
        <div className="cube">
          <img src={dice.img} alt="" className="cube__face front" />
          <img
            src="./img/gameBauCua/bau.png"
            alt=""
            className="cube__face back"
          />
          <img
            src="./img/gameBauCua/cua.png"
            alt=""
            className="cube__face left"
          />
          <img
            src="./img/gameBauCua/tom.png"
            alt=""
            className="cube__face right"
          />
          <img
            src="./img/gameBauCua/ca.png"
            alt=""
            className="cube__face top"
          />
          <img
            src="./img/gameBauCua/ga.png"
            alt=""
            className="cube__face bottom"
          />
        </div>
      </animated.div>
    </>
  );
}

export default Dice;
