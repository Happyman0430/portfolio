import { gsap } from "gsap";
import styled from "styled-components";
import backgroundVideo from "../assets/video/video1.mp4";
import { Dialog } from "../components/Dialog/Dialog";
import { useLayoutEffect, useRef } from "react";
import SplitType from "split-type";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  background-color: var(--dark);
  overflow: hidden;
`;

const ContainerDialog = styled.div``;

const TextContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--violet);
  z-index: 1;
  font-family: var(--fontL);

  & > *:nth-child(1) {
    margin-left: 2rem;
  }
  & > *:nth-child(2) {
    margin-right: 2rem;
  }

  span {
    font-size: var(--fontxxxl);
    text-transform: uppercase;
    font-weight: 600;
    /* padding: 2rem; */

    @media screen and (max-width: 64em) {
      font-size: var(--fontxxl);
      padding: 0;
    }
    @media screen and (max-width: 48em) {
      font-size: var(--fontxl);
    }
  }

  @media screen and (max-width: 48em) {
    flex-direction: column;

    align-items: flex-start;
    filter: brightness(1.1);

    & > *:last-child {
      align-self: flex-end;
    }

    height: 80vh;
    padding: 0 1rem;
  }
`;

const VideoContainer = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: bottom;
  }
`;

export const RobotPresentation = () => {
  const container = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const spanContainer = useRef<HTMLDivElement>(null);
  const typewriterContainer = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top-=550 top",
          end: "bottom top",
          scrub: true,
        },
      })
      .fromTo(dialogRef.current, { opacity: 0 }, { opacity: 2, duration: 1 });

    return () => {
      if (tl) tl.kill();
    };
  }, []);

  useLayoutEffect(() => {
    // a gsap.context() lets us use scoped selector text and makes cleanup way easier. See https://greensock.com/docs/v3/GSAP/gsap.context()
    let ctx = gsap.context(() => {
      let split = SplitType.create(".split", { types: "words" });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: spanContainer.current,
            start: "top-=550 top",
            end: "bottom top",
          },
        })
        .from(split.words, {
          // <- selector text, scoped to this component!
          opacity: 0,
          y: 80,
          // ease: "bounce.inOut",
          duration: 1,
          stagger: { amount: 0.8 },
        });

      return () => split.revert(); // context cleanup
    }, spanContainer); // <- scopes all selector text inside the context to this component (optional, default is document)

    return () => ctx.revert(); // useLayoutEffect cleanup
  }, []);

  return (
    <Section ref={container}>
      <VideoContainer>
        <video src={backgroundVideo} typeof="video/mp4" autoPlay muted loop />
      </VideoContainer>
      <ContainerDialog ref={dialogRef}>
        <Dialog
          top="10%"
          left="25%"
          text="Hello, I'm Happydev's friend, I'll help you to turor this portfolio.
                    Happydev is wonderful developer who can build everything what you want. "
                
          rotateTransform="rotate(-10deg)"
          ref={typewriterContainer}
          typewriter="typewriter1"
        />
      </ContainerDialog>
      <TextContainer ref={spanContainer}>
        <span className="split">Wonderful</span>
        <span className="split">Perfect</span>
      </TextContainer>
    </Section>
  );
};
