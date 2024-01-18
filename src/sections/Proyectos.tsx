import gsap from "gsap";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import { Dialog } from "../components/Dialog/Dialog";
// import { CardProject } from "../components/CardProject/CardProject";
import { Card }  from "../components/Card.jsx"
// import Imasia from "../assets/Images/projects/3.png";
// import FUTBot from "../assets/Images/projects/6.png";
// import rym from "../assets/Images/projects/5.png";
// import games from "../assets/Images/projects/9.png";
// import queseria from "../assets/Images/projects/8.png";
// import mobile from "../assets/Images/projects/9.png";
// import todo from "../assets/Images/projects/11.png";
// import fitness from "../assets/Images/projects/12.png";
// import poke from "../assets/Images/projects/4.png";
// import meal from "../assets/Images/projects/5.png";
// import alkemy from "../assets/Images/projects/6.png";

const Section = styled.section`
  position: relative;
  overflow: hidden;
  background-color: var(--white);
`;
const Sect = styled.section`
  z-index: 999;
`;

const ScrollSectionInner = styled.div`
  height: 50vh;
  width: 400vw;
  display: flex;
  flex-direction: row;
  position: relative;

  }
`;

// const ProjectsTop = styled.div`
//   width: 50vw;
//   display: flex;
//   height: 100vh;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
//   @media screen and (max-width: 1060px) {
//     justify-content: flex-start;
//     align-items: flex-start;
//   }
// `;

// const ProjectsBottom = styled.div`
//   width: 50vw;
//   display: flex;
//   height: 100vh;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
//   @media screen and (max-width: 1060px) {
//     justify-content: flex-start;
//     align-items: flex-start;
//   }
// `;

const ScrollSection = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Proyectos = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const typewriterContainer4 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let tl = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 250",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          // markers: true,
        },
      }
    );

    return () => {
      if (tl) tl.kill();
    };
  }, []);

  useLayoutEffect(() => {
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top-=600 top",
          end: "500 top",
          scrub: true,
        },
      })
      .fromTo(dialogRef.current, { opacity: 0 }, { opacity: 2, duration: 1 })
      .to(dialogRef.current, { opacity: 0 });

    return () => {
      if (tl) tl.kill();
    };
  }, []);

  return (
    <Section id="battery" ref={container}>
      <Sect ref={triggerRef}>
        <div ref={dialogRef}>
          <Dialog
            color="var(--dark)"
            top="15%"
            left="25%"
            text="I will program the contact form before you reach the end of the page, in the meantime, I leave you a selection of interesting projects"
            rotateTransform="rotate(-20deg)"
            ref={typewriterContainer4}
            typewriter="typewriter4"
          />
        </div>

        <ScrollSectionInner ref={sectionRef}>
          {/*<ScrollSection></ScrollSection>
          <ScrollSection>
            <ProjectsTop>
              <CardProject
                title="FUTBot"
                description="Automate your sniping easily. FUTBot is a specialized tool designed for sniping players in FIFA, to earn hundreds of thousands of coins."
                tecnologies="jQuery, Vite, Bootstarp 5"
                deploy="https://chrome.google.com/webstore/detail/futbot/kmjemgkhfhpjfblpbcomcpbnofglmnmn?hl=en-US"
                code="https://github.com/LucktoSky/FUTBot-extension"
                image={FUTBot}
              />
              <CardProject
                title="Imasia App1"
                description="You can select your own charecter and can explore Singapore town."
                tecnologies="Three.js, React, GSAP, Vite"
                deploy="https://www.Imasia.com"
                image={Imasia}
              />
              
            </ProjectsTop>
            <ProjectsBottom>
              <CardProject
                title="Rick & Morty"
                description="Rick and Morty es un proyecto desarrollado en React que utiliza la API de rickandmortyapi.com para crear una web interactiva basada en la popular serie de televisión Rick and Morty"
                tecnologies="| React | TypeScript | Tailwind | Graphql |"
                deploy="https://rym-ts.web.app/home/"
                code="https://github.com/frandepe/RyM-gql-ts"
                image={rym}
              />
              <CardProject
                title="Videojuegos"
                description="Este proyecto se centra en ofrecer a los entusiastas de los videojuegos una experiencia para descubrir con información detallada y jugar videojuegos gratuitos"
                tecnologies="| React | Firebase |"
                deploy="https://react-f2p.web.app/games"
                code="https://github.com/frandepe/Reactf2p"
                image={games}
              />
            </ProjectsBottom>
          </ScrollSection>
          <ScrollSection>
            <ProjectsTop>
              <CardProject
                title="Quesería Online"
                description="Uno de los proyectos más completos y autoadministrable por el propio dueño, con una interfaz amigable y atractiva, permite a los usuarios explorar mercadería y hacer una compra online"
                tecnologies="| React | MongoDB | Express | Node |"
                deploy="https://lodemario.vercel.app/"
                code="https://github.com/frandepe/lodemario"
                image={queseria}
              />
              <CardProject
                title="App Películas"
                description="Una app para android y ios que ofrece un catálogo de películas mediante la api themoviedb, con una interfaz elegante y fácil de usar"
                tecnologies="| React Native | TypeScript | Express | Node |"
                deploy="https://drive.google.com/file/d/1MuhScKokrplCuqmKebmCBaUMXcRa-BTV/view"
                code="https://github.com/frandepe/films-mobile"
                image={mobile}
              />
            </ProjectsTop>
            <ProjectsBottom>
              <CardProject
                title="TODO"
                description="Un proyecto que ofrece una aplicación para gestionar tareas y organizar la vida diaria de los usuarios de manera eficiente. Cuenta con un sistema de Drag and drop para mejorar la UX"
                tecnologies="| Next | TypeScript | Material UI | MongoDB | Docker |"
                deploy="https://drive.google.com/file/d/1lB3On1RjaxMLmdTZrStKScQ6mQAk7BMx/view"
                code="https://github.com/frandepe/next_todo"
                image={todo}
              />
              <CardProject
                title="Fitness App"
                description="Un emocionante proyecto que brinda a los entusiastas del fitness una plataforma completa para descubrir, aprender y practicar una amplia variedad de ejercicios mediante la api ExerciseDB."
                tecnologies="| React | TypeScript |"
                deploy="https://drive.google.com/file/d/1lB3On1RjaxMLmdTZrStKScQ6mQAk7BMx/view"
                code="https://github.com/frandepe/fitness_app"
                image={fitness}
              />
            </ProjectsBottom>
          </ScrollSection>
          <ScrollSection>
            <ProjectsTop>
              <CardProject
                title="Pokemones"
                description="Proyecto para guardar tus Pokemones favoritos. Realizado con la api pokeApi"
                tecnologies="| Next | Next UI | TypeScript |"
                deploy="https://fmd-next-pokemon.vercel.app/"
                code="https://github.com/frandepe/next_pokemon"
                image={poke}
              />
              <CardProject
                title="Orden de comida"
                description="Proyecto hecho en JavaScript Vanilla para pedir una orden de comida de manera online"
                tecnologies="| JavaScript |"
                deploy="https://ecommercerestoapp.netlify.app/"
                code="https://github.com/frandepe/restoApp"
                image={meal}
              />
            </ProjectsTop>
            <ProjectsBottom>
              <CardProject
                title="Menu de Hotel"
                description="Proyecto para pedir una orden de comida de manera online pensado para la estadía en un hotel"
                tecnologies="| React | Bootstrap |"
                deploy="https://hotel-menu-4ef42.web.app/"
                code="https://github.com/frandepe/hotel-menu"
                image={meal}
              />
              <CardProject
                title="Alkemy"
                description="Proyecto realizado para la aceleración de Alkemy Labs con un grupo de 5 compañeros y un team leader, metodologías agiles, meetings, evaluación de habilidades técnicas y blandas"
                tecnologies="| React |"
                deploy="https://drive.google.com/file/d/11JJmWuO2u9svV19QVFLR2oe6hrh7EpUc/view"
                code="https://github.com/alkemyTech/OT161-React-client"
                image={alkemy}
              />
            </ProjectsBottom>
          </ScrollSection>*/}
          <ScrollSection> </ScrollSection>
          <Card 
            src="./3.png" 
            title="Imasia App1" 
            text="You can select your own charecter and can explore Singapore town." 
            stack="Three.js, React, GSAP, Vite"
            url="https://chrome.google.com/webstore/detail/futbot/kmjemgkhfhpjfblpbcomcpbnofglmnmn?hl=en-US"
            github="https://github.com/LucktoSky/character_walk"
            vw={1920}
          />
          <Card 
            src="./6.png" 
            title="FUTBot" 
            text="Automate your sniping easily. FUTBot is a specialized tool designed for sniping players in FIFA, to earn hundreds of thousands of coins." 
            stack="jQuery, Vite, Bootstarp 5"
            url="https://chrome.google.com/webstore/detail/futbot/kmjemgkhfhpjfblpbcomcpbnofglmnmn?hl=en-US"
            github="https://github.com/LucktoSky/FUTBot-extension"
            vw={1920}
          />
          <Card 
            src="./7.GIF" 
            title="Drone website" 
            text="Drones are an efficient and cost effective way to monitor and assess damages without putting your team at risk. With" 
            stack="Three.js, React, GSAP, Vite, Tailwindcss"
            url="https://falconclover-4jyjbm--96895306497410.stormkit.dev"
            github="https://github.com/LucktoSky/drone-website"
            vw={1920}
          />
          
          <Card 
            src="./9.png" 
            title="Ours App" 
            text="The idea behind “Ours” is an investing platform that allows you to work with a group of
            your selected peers. " 
            stack="React Native, Firebase, Plaid Api, "
            url="https://play.google.com/store/apps/details?id=ours.recipes.for.kids"
            github="https://github.com/LucktoSky/ours----React-Native--Firebase"
            vw={1920}
          />

          <Card 
            src="./8.png" 
            title="Imasia App2" 
            text="Threads emerge as a formidable competitor to Twitter, backed by Meta and Instagram, in a clash of social media titans." 
            stack="Django,ML, MongoDB, React, Vite"
            url="https://www.immersiveasia.io/"
            github="https://github.com/LucktoSky/character_walk"
            vw={1920}
          />
          <Card 
            src="./5.png" 
            title="FUTBot dashboard" 
            text="Automate your sniping easily. FUTBot is a specialized tool designed for sniping players in FIFA, to earn hundreds of thousands of coins." 
            stack="Node, Express, MongoDB, React, Vite"
            url="https://xzenmart.com"
            github="https://github.com/LucktoSky/common-manage"
            vw={1920}
          />
          <Card 
            src="./12.png" 
            title="E-Learning system" 
            text="This is E-Learning manangement system. Teachers can manage student study and parent can see and help children" 
            stack="PHP, MySQL, Jquery, Bootstrap"
            url="https://try.acadex.app/signin/index"
            github="https://github.com/Happy0501/e-Learning"
            vw={1920}
          />
           <Card
            src="./shopify2.PNG" 
            title="Shopify" 
            text="This is Shopify website. It can be helped Protection and relief" 
            stack="Shopify"
            url="https://try.acadex.app/signin/index"
            github="https://github.com/Happy0501/shopify"
            vw={1920}
          />
          <Card
            src="./shopify.PNG" 
            title="Shopify" 
            text="This is Shopify website. It can be helped Beautiful for women" 
            stack="Shopify"
            url="https://try.acadex.app/signin/index"
            github="https://github.com/Happy0501/shopify"
            vw={1920}
          />
          <Card 
            src="./shopify5.PNG" 
            title="Shopify" 
            text="This is Shopify website. This is fantastis women's cloths website.Please surff it" 
            stack="Shopify"
            url="https://try.acadex.app/signin/index"
            github="https://github.com/Happy0501/shopify"
            vw={1920}
          />
          <Card 
            src="./webflow1.PNG" 
            title="Webflow" 
            text="This is Webflow website. No code, wonderful scape, fantastic animation, responsible" 
            stack="WEBFLOW"
            url="https://try.acadex.app/signin/index"
            github="https://github.com/Happy0501/shopify"
            vw={1920}
          />
          <Card 
            src="./webflow2.PNG" 
            title="webflow" 
            text="This is Webflow website. Please check. keep it in your mind" 
            stack="Webflow"
            url="https://try.acadex.app/signin/index"
            github="https://github.com/Happy0501/shopify"
            vw={1920}
          />
           <Card 
            src="./wordpress2.PNG" 
            title="wordpress" 
            text="This is wordpress website. Please check. keep it in your mind" 
            stack="wordpress"
            url="https://try.acadex.app/signin/index"
            github="https://github.com/Happy0501/shopify"
            vw={1920}
          />
           <Card 
            src="./multi.PNG" 
            title="PHP,Zapier,Laravel,joomla" 
            text="This is website. Please check. " 
            stack="wordpress"
            url="https://try.acadex.app/signin/index"
            github="https://github.com/Happy0501/shopify"
            vw={1920}
          /> 
          <Card 
            src="./url.png" 
            title="Url" 
            text="This is some of my websites. Please check. " 
            stack="wordpress,shopify,webflow,PHP,React,vue.js...."
            url="https://try.acadex.app/signin/index"
            github="https://github.com/Happy0501/shopify"
            vw={1920}
          />   
        </ScrollSectionInner>
      </Sect>
    </Section>
  );
};

export default Proyectos;
