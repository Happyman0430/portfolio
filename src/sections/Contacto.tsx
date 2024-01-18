import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
// import emailjs from "@emailjs/browser";
import { styled } from "styled-components";
import { RobotPrincipal2 } from "../components/RobotPrincipal2";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { useForm } from "../hooks/useForm";

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;
  background: var(--dark);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  overflow: hidden;
  margin-top: 5em;
  @media screen and (max-width: 800px) {
    height: 200vh;
    margin-top: 10em;
    flex-direction: column;
  }
`;

const Button = styled.button`
  font-size: var(--fontsm);
  background-color: var(--blue);
  color: var(--white);
  border: none;
  margin-top: 20px;
  padding: 3px 10px 3px 10px;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  -webkit-transition: all 0.8s ease;
  transition: all 0.8s ease;
  overflow: hidden;
  &:before,
  &:after {
    position: absolute;
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    left: 100%;
    top: 1%;
  }
  &:after {
    left: -100%;
    -webkit-clip-path: polygon(10% 0, 70% 0, 90% 100%, 30% 100%);
    clip-path: polygon(10% 0, 70% 0, 90% 100%, 30% 100%);
    background-color: rgba(255, 255, 255, 0.6);
    -webkit-transition: all 300ms ease;
    transition: all 300ms ease;
  }
  &:hover::after {
    left: 100%;
    top: 1%;
  }
`;

const ContainerCanvas = styled.div`
  width: 40vw;

  margin-bottom: -500px;
  @media screen and (max-width: 800px) {
    width: 100vw;
    height: 500px;
  }
`;

const Form = styled.form`
  width: 40rem;
  @media screen and (max-width: 800px) {
    width: 100vw;
  }
  & > div:first-child {
    & > input {
      width: 100%;
    }
  }
  & > div:nth-child(2) {
    & > input:first-child {
      width: 49%;
      margin-right: 1%;
    }
    & > input:nth-child(2) {
      width: 49%;
      margin-left: 1%;
    }
  }
`;

const H4Form = styled.h4`
  margin-bottom: 10px;
  font-size: var(--fontxl);
`;

const InputField = styled.input`
  margin: 15px 0;
  font-size: 16px;
  padding: 10px;
  width: 250px;
  border: 1px solid rgba(10, 180, 180, 1);
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: rgba(20, 20, 20, 0.6);
  color: white;
  outline: none;
  &::placeholder {
    color: rgba(255, 255, 255, 0.753);
  }
  /* Evitar que el fondo se vuelva blanco al autocompletar */
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px rgba(20, 20, 20, 0.6) inset;
    box-shadow: 0 0 0px 1000px rgba(0, 0, 0, 0.959) inset;
    -webkit-text-fill-color: white;
  }

  /* Mostrar el color de fondo original al seleccionar texto */
  &::selection {
    background-color: rgba(20, 20, 20, 0.6);
  }
`;

const InputText = styled.textarea`
  resize: none;
  margin: 15px 0;
  font-size: 16px;
  padding: 10px;
  width: 100%;
  height: 300px;
  border: 1px solid rgba(10, 180, 180, 1);
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: rgba(20, 20, 20, 0.6);
  color: white;
  outline: none;
  &::placeholder {
    color: rgba(255, 255, 255, 0.753);
  }
`;

const ContainerForm = styled.div`
  width: 60%;
  margin-top: 15rem;
  padding: 3rem;
  color: var(--white);
  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;

export const Contacto = () => {
  const [showOrbitControls, setShowOrbitControls] = useState(false);

  const handleResize = () => {
    setShowOrbitControls(window.innerWidth > 800);
  };

  const [loading, setLoading] = useState<boolean>(false);
  const form: any = useRef();
  const {
    onChange,
    user_name,
    user_tel,
    user_email,
    message,
    // resetForm,
    isValidEmail,
  } = useForm({
    user_name: "",
    user_email: "",
    user_tel: "",
    message: "",
  });

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (user_name.trim().length <= 2 || !isValidEmail(user_email)) {
      return toast.warning(
        "You must fill in the email and name fields correctly"
      );
    }
    setLoading(true);
    // emailjs
    //   .sendForm(
    //     "service_f1c08ed",
    //     "template_41jde2i",
    //     form.current as any,
    //     "uDnSkwvJgY9JcC3xn"
    //   )
    //   .then(
    //     () => {
    //       setLoading(false);

    //       toast.success("👌 Message sent! I will respond as soon as possible");
    //     },
    //     () => {
    //       toast.error(
    //         "😲 Ops! No se ha podido enviar el mensaje, comunicate a travéz de WhatsApp"
    //       );
    //     }
    //   );
    // resetForm();
  };

  useEffect(() => {
    handleResize(); // Llamada inicial para establecer el estado correctamente

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Section id="contacto">
      <ToastContainer position="bottom-center" limit={1} />
      <ContainerCanvas>
        <Canvas camera={{ fov: showOrbitControls ? 80 : 50 }}>
          <ambientLight intensity={0.15} />
          <directionalLight position={0} />
          <Suspense fallback={null}>
            <RobotPrincipal2 />
          </Suspense>
          {/* <Environment preset="night" /> */}
          {showOrbitControls && <OrbitControls />}
        </Canvas>
      </ContainerCanvas>
      <ContainerForm>
        <H4Form>Contact me</H4Form>
        <Form ref={form} onSubmit={sendEmail}>
          {/* <label htmlFor="outlined-basic"></label> */}
          <div>
            <InputField
              type="text"
              name="user_name"
              id="outlined-basic"
              placeholder="Name *"
              value={user_name}
              onChange={onChange}
              style={{
                borderBottom:
                  user_name.trim().length <= 2
                    ? "1px solid red"
                    : "1px solid rgb(10, 180, 180)",
              }}
            />
          </div>
          <div>
            <InputField
              type="email"
              placeholder="Email *"
              name="user_email"
              value={user_email}
              onChange={onChange}
              style={{
                borderBottom: !isValidEmail(user_email)
                  ? "1px solid red"
                  : "1px solid rgb(10, 180, 180)",
              }}
            />
            <InputField
              type="number"
              placeholder="Tel (optional)"
              name="user_tel"
              value={user_tel}
              onChange={onChange}
            />
          </div>

          <InputText
            placeholder="Share your thoughts..."
            value={message}
            onChange={onChange}
            name="message"
            id="custom-input"
          />

          {loading ? (
            <Button disabled>Sending...</Button>
          ) : (
            <Button type="submit">Send to</Button>
          )}
        </Form>
      </ContainerForm>
    </Section>
  );
};
