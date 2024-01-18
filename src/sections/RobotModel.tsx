import { styled } from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";
import { RobotPrincipal } from "../components/RobotPrincipal";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  z-index: 1;
  background-color: transparent;
`;

export const RobotModel = () => {
  return (
    <Container id="phone-model">
      <Canvas camera={{ fov: 50 }}>
        <ambientLight intensity={0.15} />
        <directionalLight position={0.5} />
        <Suspense fallback={null}>
          <RobotPrincipal />
        </Suspense>
        <Environment preset="night" />
        {/* <axesHelper args={[5]} />
        <Stats /> */}
      </Canvas>
    </Container>
  );
};
