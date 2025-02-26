import "./App.css";
import foto from "./img/cachorinho.jpg";

import Perfil from "./components/perfil/perfil";
import Switch from "./components/switch/switch";
import Links from "./components/links/links";
import SocialLinks from "./components/social.links/social.links";
import Rodape from "./components/Rodape/Rodape";
import { useState } from "react";

const App = () => {
  const [isLight, setIsLight] = useState(true);

  const troca = () => {
    setIsLight((anterior) => !anterior);
  };
  return (
    <div id="App" className={isLight && "light"}>
      <Perfil fotoperfil={foto}>@Bianca</Perfil>

      

      <Switch troca ={troca} isLight={isLight} />
      <ul>
        <Links link={"https://github.com/biancasenai"}>Github</Links>
        <Links link={"https://www.instagram.com/"}>Instagram</Links>
        <Links link={"https://www.youtube.com/"}>Youtube</Links>
        <Links
          link={"https://www.linkedin.com/in/bianca-furlanetto-b895b2353/"}
        >
          Linkedin
        </Links>
      </ul>
      <div id="socialLinks">
        <SocialLinks
          link={"https://github.com/biancasenai"}
          icon={"logo-github"}
        />
        <SocialLinks
          link={"https://www.instagram.com/"}
          icon={"logo-instagram"}
        />
        <SocialLinks link={"https://www.youtube.com/"} icon={"logo-youtube"} />
        <SocialLinks
          link={"https://www.linkedin.com/in/bianca-furlanetto-b895b2353/"}
          icon={"logo-linkedin"}
        />
      </div>
      <Rodape>Bianca</Rodape>
    </div>
  );
};

export default App;
