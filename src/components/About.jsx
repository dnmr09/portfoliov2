import Reveal from "./Reveal";
import { chips, profile, services } from "../data/data";
import FlipCard from "./FlipCard.jsx";

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

export default function About() {
  return (
    <section id="about" className="wrap">
      <Reveal>
        <h3 className="h">About Me</h3>
      </Reveal>

      <Reveal className="abt">
        <p>{profile.about}</p>
        <div className="img">
          <FlipCard
            front={
              <img
                src="/images/front.png"
                alt={`${profile.name} portrait`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            back={
              <img
                src="/images/back.jpg"
                alt={`${profile.name} photo`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            axis="y"
            flipOnClick
            draggable
            dragDistance={0}
            tilt
            tiltMax={12}
            glare
            glareOpacity={0.22}
            hoverScale={1.03}
            perspective={1100}
            stiffness={170}
            damping={20}
            width={316}
            height={316}
            radius={22}
            background="#27272a"
            color="#f5f5f5"
            shadow
            shadowColor="#000000"
            shadowOpacity={0.45}
            ariaLabel={`Flip card about ${profile.name}`}
          />
        </div>
      </Reveal>

      <Reveal className="tech-stack-heading">
        <h3 className="h">Tech Stack</h3>
      </Reveal>

      <Reveal className="mq">
        <div className="t">
          {[...chips, ...chips, ...chips, ...chips].map(([name, icon], i) => (
            <div key={i} className="chip" style={{ width: 110 }}>
              <img src={`${CDN}${icon}/${icon}-original.svg`} alt={name} />
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="grid5">
        <div className="g2">
          <h4>Services</h4>
          {services.map(([title, desc]) => (
            <div key={title} className="mb5">
              <div className="dotr">
                <span className="dot" aria-hidden="true" />
                <h5>{title}</h5>
              </div>
              <p>{desc}</p>
            </div>
          ))}
        </div>

        <div className="g3" style={{ marginTop: 16 }}>
          <h4>Education</h4>
          <div className="dotr" style={{ gap: 12, alignItems: "flex-start" }}>
            <span className="dot" style={{ animationDuration: "2s", marginTop: 10 }} />
            <p style={{ fontSize: 18 }}>
              {profile.school} - {profile.program}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
