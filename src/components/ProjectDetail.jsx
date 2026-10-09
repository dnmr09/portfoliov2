import { projects } from "../data/data";

export default function ProjectDetail({ id, onBack }) {
  const p = projects.find((x) => x.id === id);
  if (!p) return null;

  return (
    <div id="detail">
      <div className="in">
        <a href="#" className="back" onClick={(e) => { e.preventDefault(); onBack(); }}>
          <span style={{ marginRight: 8 }}>←</span> Back to Portfolio
        </a>
        <div className="hi" style={{ background: `url(${p.image}) center/cover, ${p.bg}` }} />
        <h1>{p.title}</h1>
        <div className="tags">
          {p.tech.map((t) => <span key={t}>{t}</span>)}
        </div>
        <hr />
        <h3>About the Project</h3>
        <p className="ft">{p.full}</p>
        {(p.live || p.gh) && (
          <div className="lk">
            {p.live && <a className="a" href={p.live} target="_blank" rel="noopener noreferrer">Live Demo</a>}
            {p.gh && <a className="b" href={p.gh} target="_blank" rel="noopener noreferrer">View Source Code</a>}
          </div>
        )}
      </div>
    </div>
  );
}
