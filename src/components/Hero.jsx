import { useEffect, useState } from "react";
import { typewriterWords, profile } from "../data/data";
import TechText from "./TechText.jsx";

function useTypewriter(words) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let delay = deleting ? 50 : 100;
    let next = deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1);

    if (!deleting && next === word) delay = 1500;

    const id = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(next);
      }
    }, !deleting && text === word ? 1500 : delay);

    return () => clearTimeout(id);
  }, [text, deleting, index, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(typewriterWords);

  return (
    <section id="home">
      <div className="hero">
        <img
          className="avatar"
          src="/images/denmar.jpg"
          alt={profile.shortName}
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
        <div className="hero-tech">
          <TechText
            text="Welcome"
            fontWeight={800}
            fontSize={150}
            reveal="letter"
            dashLength={4}
            dashGap={2}
            specks={15}
            fontFamily=""
            color="#000000"
            accentColor="#000000"
            letterSpacing={-0.05}
            reach={200}
            softness={0.7}
            strokeWidth={1.5}
            speed={1}
            lineStyle="dashed"
            selection
            labels
            draggable
            sweep
          />
        </div>
        <p className="sub">{profile.tagline}</p>
        <div className="type">
          <span>{typed}</span>
          <b>|</b>
        </div>
        <div className="btns">
          <a href="#project" className="btn dark">Projects</a>
          <a href="#contact" className="btn out">Get In Touch</a>
        </div>
      </div>

      <div className="floats">
        <div className="fl f1">
          <img src="/images/html.png" alt="HTML5" />
        </div>
        <div className="fl f2">
          <img src="/images/js.png" alt="JavaScript" />
        </div>
        <div className="fl f3">
          <img src="/images/react.png" alt="React" />
        </div>
        <div className="fl f4">
          <img src="/images/css.png" alt="CSS3" />
        </div>
         <div className="fl f5">
          <img src="/images/mongo.png" alt="MongoDB" />
        </div>
        <div className="fl f6">
          <img src="/images/exp.png" alt="Express" />
        </div>
        <div className="fl f7">
          <img src="/images/sql.png" alt="SQL" />
        </div>
        <div className="fl f8">
          <img src="/images/node.png" alt="Node.js" />
        </div>
      </div>
    </section>
  );
}
