import React from "react";
import { useDispatch } from "react-redux";
import { datCuocAction } from "../../redux/action/GameBauCua_Ation";
import { animated, useSpring } from "react-spring";

function Squash(props) {
  const { sQuash } = props;
  // useSpring
  const [propsSpringsUp, setUp] = useSpring(() => {
    return {
      to: { scale: 1.25 },
      from: { scale: 1 },
      config: { duration: 500 },
      reset: true,
    };
  });
  const [propsSpringsDown, setDown] = useSpring(() => {
    return {
      to: { scale: 1.25 },
      from: { scale: 1 },
      config: { duration: 500 },
      reset: true,
    };
  });

  const dispatch = useDispatch();
  const hanldePut = (sQuash, upDown) => {
    dispatch(datCuocAction(sQuash, upDown));
  };
  return (
    <div className="squash">
      <img src={sQuash.img} alt="" className="imgSquash" />
      <div className="btnSquash">
        <animated.button
          style={{
            transform: propsSpringsUp.scale.to((scale) => `scale(${scale})`),
          }}
          onClick={() => {
            setUp({ scale: 1 });
            setUp({ scale: 1.25 });
            hanldePut({ ...sQuash, upDown: true });
          }}
        >
          +
        </animated.button>
        <span>{sQuash.point}</span>
        <animated.button
          style={{
            transform: propsSpringsDown.scale.to((scale) => `scale(${scale})`),
          }}
          onClick={() => {
            setDown({ scale: 1 });
            setDown({ scale: 1.25 });
            hanldePut({ ...sQuash, upDown: false });
          }}
        >
          -
        </animated.button>
      </div>
    </div>
  );
}

export default Squash;
