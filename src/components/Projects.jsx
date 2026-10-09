import Reveal from "./Reveal";
import { projects } from "../data/data";

export default function Projects({ onOpenProject }) {
  return (
    <section id="project">
      <Reveal>
        <h3 className="h" style={{ textAlign: "center" }}>Recent Projects</h3>
      </Reveal>

      <div className="cards">
        {projects.map((x) => (
          <div key={x.id} className="card c" onClick={() => onOpenProject(x.id)}>
            <div className="thumb">
              <div style={{ background: `url(${x.image}) center/cover, ${x.bg}` }} />
            </div>
            <div className="tx">
              <h6>{x.title}</h6>
              <p className="d">{x.short}</p>
            </div>
            <div className="m">View Details →</div>
          </div>
        ))}
      </div>
    </section>
  );
}
