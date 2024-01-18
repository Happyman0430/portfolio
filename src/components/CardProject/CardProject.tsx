import "./CardProject.css";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

interface Props {
  title: string;
  description: string;
  tecnologies: string;
  deploy: string;
  code?: string;
  image: string;
}

export const CardProject = ({
  title,
  description,
  tecnologies,
  deploy,
  code,
  image,
}: Props) => {
  const handleWebClick = () => {
    window.open(deploy, "_blank");
  };
  const handleCodeClick = () => {
    window.open(code, "_blank");
  };
  return (
    <div className="card">
      <div className="content">
        <div className="front">
          <p className="title">{title}</p>
          <img src={image} alt="proyecto" />
        </div>

        <div className="back">
          <div className="descriptionBackContainer">
            <p className="description">{description}</p>
            <div className="container-buttons-card">
              <button onClick={handleWebClick}>
                <AiFillEye /> Visit site
              </button>
              {code ? (
                <button onClick={handleCodeClick}>
                  <AiFillGithub /> view code
                </button>
              ) : (
                <button style={{ cursor: "not-allowed" }} disabled>
                  <AiFillGithub /> Private Code
                </button>
              )}
            </div>
          </div>
          <div className="tecnologiasContainer">
            <p className="tecnologiasTitulo">Technologies</p>
            <p>{tecnologies}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
