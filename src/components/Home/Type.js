import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          
          "Ingenieur",
          "Développeur de Logiciel",
          "Dévelopeur Mobile ",
          "Développeur Full Stack",
          "Developpeur Web ",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />  
  );
}

export default Type;
