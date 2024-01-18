import Proyectos from "./sections/Proyectos";
import { TrabajoActual } from "./sections/TrabajoActual";
import { Presentation } from "./sections/Presentation";
import { Habilidades } from "./sections/Habilidades";
import { RobotPresentation } from "./sections/RobotPresentation";
import { Transicion } from "./sections/Transicion";
import { Home } from "./sections/Home";
import { GlobalStyle } from "./styles/GlobalStyle";
import { RobotModel } from "./sections/RobotModel";
import { Contacto } from "./sections/Contacto";
import {New_skill}  from "./sections/New_skill";

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
      <RobotModel />
      <RobotPresentation />
      <Presentation />
      <Habilidades />
      <Transicion />
      <New_skill/>
      <Proyectos />
      <TrabajoActual />
      <Contacto />
    </>
  );
}

export default App;
