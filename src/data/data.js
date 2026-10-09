
export const profile = {
  name: "Denmar G. Daylisan",
  shortName: "DM",
  email: "denmardaylisan@gmail.com",
  github: "https://github.com/dnmr09",
  linkedin: "https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BKYZPbWjLQvmWpVX%2BVlCT5Q%3D%3D",
  location: "Iloilo, Philippines",
  school: "Western Institute of Technology (WIT)",
  program: "Information Technology (3rd Year)",
  tagline:
    "Transforming complex concepts into sleek, functional web designs.",
  about:
    "I'm Denmar G. Daylisan, a third-year Information Technology student at the Western Institute of Technology (WIT) in Iloilo. Having spent two years mastering my craft, I know without a doubt that this is the field for me.",
};

export const gmailComposeUrl = (subject, body) => {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: profile.email,
  });

  if (subject) params.set("su", subject);
  if (body) params.set("body", body);

  return `https://mail.google.com/mail/?${params.toString()}`;
};

export const typewriterWords = ["Designing Clean UI/UX", "Building Modern Web Systems", "Crafting Visual Identities", "Designing User Experiences"];

export const projects = [
  {
    id: "project-1",
    title: "Siklab",
    short: "Web Design",
    full: "A web platform that helps students hone their diverse skills through local part-time jobs, allowing them to negotiate directly with clients to gain the practical experience needed to spark their professional careers.",
    tech: ["Web Design", "UI/UX Design", "Web Development"],
    bg: "linear-gradient(135deg,#1d6ef5,#060e1f)",
    image: "/images/siklab.jpg",
    live: "https://www.figma.com/proto/WSL2c4wKWHOZznEZpfeWP6/Siklab?node-id=191-209&t=3FBwYue7x4Pc669v-0&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=191%3A209&fuid=1536343806414601672",
  },
  {
    id: "project-2",
    title: "Portfolio Design",
    short: "Personal Branding",
    full: "A custom digital space bridging creative design and practical code, crafted to deliver a seamless user experience while telling my story as a developer.",
    tech: ["Personal Branding", "Portfolio"],
    bg: "linear-gradient(135deg,#38b6ff,#0a1628)",
    image: "/images/portfoliov1.jpg",
    live: "https://daylisan.vercel.app/",
  },
  {
    id: "project-3",
    title: "SkillBridge",
    short: "Modern Interface Design",
    full: "An Integrated Internship Management and Student Progress Monitoring System is a proposed digital platform designed to streamline, centralize, and automate the internship workflow for students, academic coordinators, and host supervisors.",
    tech: ["Web Design", "UI/UX Design", "Web Development"],
    bg: "linear-gradient(135deg,#0d1e35,#38b6ff)",
    image: "/images/skillbridge.jpg",
    live: "https://skillbridgeversion1.vercel.app/",
  },
];

export const services = [
  ["UI/UX Design", "Clean and user-friendly interface design for websites and apps."],
  ["Web Design", "Responsive and modern website designs for personal and business use."],
  ["Brand Identity", "Simple visual branding including colors, styles, and presentation."],
  ["Layout Design", "Organized page layouts that improve readability and appearance."],
];

export const chips = [
  ["HTML", "html5"],
  ["CSS", "css3"],
  ["React.js", "react"],
  ["Javascript", "javascript"],
  ["MongoDB", "mongodb"],
  ["MySQL", "mysql"],
  ["Node.js", "nodejs"],
  ["Express.js", "express"],
];
