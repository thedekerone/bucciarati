import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import { useDrag, useScroll } from "react-use-gesture";

export default function Carousel(props) {
  var margin = parseInt(props.margin, 10);
  var slides = parseInt(props.slides, 10);
  var width = parseInt(props.width, 10);
  var height = parseInt(props.height, 10);

  const [immediate, setImmediate] = useState(true);
  const [{ xy }, set] = useSpring(() => ({
    xy: [0, 0],
    immediate: true
  }));

  const [gaa, setGaa] = useState(true);

  const bind = useDrag(({ down, delta, local, velocity, direction }) => {
    //Handle on mouseup click event
    down
      ? Math.abs(delta[0]) < 10
        ? setGaa(true)
        : setGaa(false)
      : setGaa(true);
    setImmediate(false);
    set({
      xy: down
        ? [local[0], 0]
        : [
            Math.round(local[0] / (margin + width) + 0.3 * direction[0]) *
              (margin + width),
            0
          ]
    });

    if (!down) {
      setImmediate(true);
      local[0] =
        Math.round(local[0] / (margin + width) + 0.3 * direction[0]) *
        (margin + width);
      if (
        local[0] > 0 ||
        (!window.matchMedia("(max-width:950px)").matches && slides < 6) ||
        (!window.matchMedia("(max-width:650px)").matches && slides < 6) ||
        (!window.matchMedia("(max-width:500px)").matches && slides < 5)
      ) {
        local[0] = 0;
        set({
          xy: [0, 0]
        });
      } else if (window.matchMedia("(max-width:950px)").matches) {
        if (
          local[0] <
          window.innerWidth - (width * slides + margin * (slides - 1))
        ) {
          local[0] =
            window.innerWidth - 10 - (width * slides + margin * (slides - 1));

          set({
            xy: [local[0], 0]
          });
        }
      } else {
        if (local[0] < 1150 - (width * slides + margin * (slides - 1))) {
          local[0] = 1150 - 25 - (width * slides + margin * (slides - 1));
          set({
            xy: [local[0], 0]
          });
        }
      }
    }
  });
  var styleNeeded = {
    transform: xy.interpolate((x, y) => `translate3D(${x}px,0, 0)`),
    whiteSpace: "nowrap",
    margin: "0 auto",
    transition: immediate ? ".4s" : "0s"
  };

  return (
    <div className="carousel-container" {...bind()}>
      <animated.div
        className={`carousel ${slides < 6 ? props.type : null}`}
        style={styleNeeded}
      >
        {props.children}
      </animated.div>

      <style jsx>{`
        .carousel-container {
          overflow: hidden;
        }
        .carousel-container:hover {
          cursor: pointer;
        }
        .carousel::-webkit-scrollbar {
          display: none;
        }

        .carousel-container :global(.carousel__item) {
          display: inline-block;
          width: ${width}px;
          height: ${height}px;
          background: white;
          margin-right: ${margin}px;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -o-user-select: none;
          user-select: none;
        }
        @media (min-width: 950px) {
          :global(.marcas, .productos) {
            display: flex;
          }
          :global(.marcas) {
            justify-content: center;
          }
          .carousel-container {
            overflow: hidden;
          }
          :global(.carousel__item) {
            position: relative;
            z-index: ${gaa ? "1" : "-1"};
          }
        }
      `}</style>
    </div>
  );
}
