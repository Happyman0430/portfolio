import { forwardRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { keyframes, styled } from "styled-components";

interface Props {
  text: string;
  rotateTransform: string;
  top: string;
  left: string;
  color?: string;
  typewriter: string;
  maxWidth?: string;
  mediaTop?: string;
  mediaLeft?: string;
}

export const Dialog = forwardRef<HTMLDivElement, Props>(
  (
    {
      text,
      rotateTransform,
      top,
      left,
      color = "var(--white)",
      typewriter,
      maxWidth,
      mediaTop,
      mediaLeft,
    },
    ref: any
  ) => {
    const DialogText = styled.div`
      position: absolute;
      border-radius: 10px;
      padding: 10px;
      transform: ${rotateTransform};
      box-shadow: 0 8px 32px 0 var(--violetRgba);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      border: 1px solid rgba(255, 255, 255, 0.18);
      top: ${top};
      left: ${left};
      width: 25%;
      height: max-content;
      color: ${color};
      font-size: var(--fontmd);
      font-family: var(--fontRobot);

      @media screen and (max-width: ${maxWidth}) {
        left: ${mediaLeft};
        top: ${mediaTop};
      }

      &:before {
        border: 25px solid var(--violetRgba);
        content: "";
        border-left-color: transparent;
        border-bottom-color: transparent;
        border-right-color: transparent;
        position: absolute;
        bottom: -50px;
        left: calc(50% - 25px);
      }

      @media screen and (max-width: 48em) {
        font-size: var(--fontsm);
        width: 45%;
      }
      @media screen and (max-width: 64em) {
        width: 55%;
      }
    `;

    const efecto = keyframes`
50% {
  border-color: transparent;
}
`;

    const Text = styled.span`
      text-align: center;
      border-right: 3px solid;
      padding-right: 5px;
      animation: ${efecto} 0.5s step-end infinite alternate;
    `;

    useLayoutEffect(() => {
      let split = SplitType.create("." + typewriter, { types: "chars" });

      let tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: "top-=550 top",
            end: "bottom top",
            // markers: true,
          },
        })
        .from(split.chars, {
          opacity: 0,
          stagger: { amount: 2 },
        });

      return () => {
        if (tl) tl.kill();
      };
    }, []);

    return (
      <DialogText ref={ref}>
        <Text className={typewriter}>{text}</Text>
      </DialogText>
    );
  }
);
