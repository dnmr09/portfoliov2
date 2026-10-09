import Reveal from "./Reveal";
import { gmailComposeUrl, profile } from "../data/data";

const icon = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const body = `${f.get("message")}\n\nFrom: ${f.get("name")} (${f.get("email")})`;
    window.location.href = gmailComposeUrl(f.get("subject"), body);
  };

  return (
    <section id="contact">
      <Reveal className="ct">
        <div className="hd">
          <h2>Let's Work Together</h2>
          <p>Have a project in mind? Send me a message.</p>
        </div>

        <div className="box">
          <div>
            <h3>Contact Information</h3>
            <p className="lead">You can also contact me directly using the contact information below.</p>

            <div className="ci">
              <div className="ic">
                <svg {...icon}><path d="m22 7-8.99 5.73a2 2 0 0 1-2.01 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
              </div>
              <div>
                <small>Email Me</small>
                <a href={gmailComposeUrl()} target="_blank" rel="noopener noreferrer"><b>{profile.email}</b></a>
              </div>
            </div>

            <div className="ci">
              <div className="ic">
                <svg {...icon}><path d="M20 10c0 5-5.5 10.2-7.4 11.8a1 1 0 0 1-1.2 0C9.5 20.2 4 15 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <div>
                <small>Location</small>
                <b>{profile.location}</b>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit}>
            <div className="fg">
              <div>
                <label htmlFor="name">Full Name</label>
                <input id="name" name="name" required placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" name="email" required placeholder="yourname@example.com" />
              </div>
            </div>
            <div style={{ marginBottom: 24 }}>
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" required placeholder="Proposals for Collaboration / Enquiries" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required placeholder="Write your message here..." />
            </div>

            <button className="send" type="submit">
              <span>Send a message</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.54 21.69a.5.5 0 0 0 .94-.02l6.5-19a.5.5 0 0 0-.64-.64l-19 6.5a.5.5 0 0 0-.02.94l7.93 3.18a2 2 0 0 1 1.11 1.11z" />
                <path d="m21.85 2.15-10.94 10.94" />
              </svg>
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
