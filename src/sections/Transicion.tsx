import { styled } from "styled-components";

const Section = styled.div`
  width: 100vw;
  /* height: 50vh; */
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: var(--white);
  overflow: hidden;
`;

export const Transicion = () => {
  return (
    <Section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#00000"
          fillOpacity="1"
          d="M0,128L80,112C160,96,320,64,480,74.7C640,85,800,139,960,149.3C1120,160,1280,128,1360,112L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </Section>
  );
};
