import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { Dialog } from "../components/Dialog/Dialog";
import { PresentationInfo } from "../components/PresentationInfo/PresentationInfo";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  /* display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center; */

  background-color: var(--grey);
  overflow: hidden;
`;

const ContainerInfo = styled.div`
  z-index: 999;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 1100px) {
    justify-content: center;
    align-items: flex-end;
    /* margin-bottom: 20px; */
  }
`;

export const Presentation = () => {
  const container = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const typewriterContainer2 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top-=400 top",
          end: "bottom top",
          scrub: true,
        },
      })
      .fromTo(dialogRef.current, { opacity: 0 }, { opacity: 2, duration: 2 });

    return () => {
      if (tl) tl.kill();
    };
  }, []);

  return (
    <Section ref={container}>
      <div ref={dialogRef}>
        <Dialog
          color="var(--dark)"
          top="15%"
          left="calc(50% - 450px)"
          text="I have prepared this guide for you to learn a little more about my creator./
                 Good deadline, perfect, Best Quality, Long-term "
          rotateTransform="rotate(15deg)"
          ref={typewriterContainer2}
          typewriter="typewriter2"
          maxWidth="1100px"
          mediaLeft="25%"
        />
      </div>
      <ContainerInfo>
        <PresentationInfo />
      </ContainerInfo>
    </Section>
  );
};
