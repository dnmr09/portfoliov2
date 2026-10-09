import { gmailComposeUrl, profile } from "../data/data";

export default function Footer() {
  return (
    <footer>
      <div className="fi">
        <div className="fr">
          <div>
            <h2>Denmar.</h2>
            <p className="lt" style={{ maxWidth: 360, marginTop: 8 }}>
              Crafting digital experiences that blend visual elegance with purposeful functionality.
            </p>
          </div>
          <div className="fl2">
            <a
              className="footer-icon-link"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.04 3.29 1.45.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.3-2.61 5.24-5.1 5.52.4.35.75 1.03.75 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
            </a>
            <a
              className="footer-icon-link"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18H5.67V9.4h2.67ZM7 8.23a1.55 1.55 0 1 1 .02-3.1A1.55 1.55 0 0 1 7 8.23ZM18.34 18h-2.67v-4.18c0-1-.02-2.28-1.39-2.28-1.39 0-1.6 1.08-1.6 2.2V18h-2.67V9.4h2.56v1.17h.04c.36-.67 1.23-1.38 2.53-1.38 2.7 0 3.2 1.78 3.2 4.1Z" />
              </svg>
            </a>
            <a
              className="footer-icon-link footer-gmail"
              href={gmailComposeUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Email ${profile.email}`}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="#4285F4" d="M22 6.2v11.6c0 1.2-.9 2.2-2.1 2.2h-2.1V9.1L12 13.4 6.2 9.1V20H4.1A2.1 2.1 0 0 1 2 17.8V6.2c0-1.2.9-2.2 2.1-2.2h.7L12 9.3l7.2-5.3h.7A2.1 2.1 0 0 1 22 6.2Z" />
                <path fill="#34A853" d="M2 6.2c0-.8.4-1.5 1-1.9l3.2 2.4v2.4L2 6.2Z" />
                <path fill="#FBBC04" d="M17.8 6.7 21 4.3c.6.4 1 1.1 1 1.9l-4.2 2.9V6.7Z" />
                <path fill="#EA4335" d="M3 4.3c.3-.2.7-.3 1.1-.3h.7L12 9.3l7.2-5.3h.7c.4 0 .8.1 1.1.3L12 11.1 3 4.3Z" />
              </svg>
            </a>
           
          </div>
        </div>
        <hr />
        <div className="fr">
          <p>© {new Date().getFullYear()} Denmar Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
