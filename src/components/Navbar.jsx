import StaggeredMenu from "./StaggeredMenu.jsx";

export default function Navbar({ onNavigate }) {
  const menuItems = [
    { label: "Home", ariaLabel: "Go to home section", link: "#home" },
    { label: "About", ariaLabel: "Learn about Denmar", link: "#about" },
    { label: "Projects", ariaLabel: "View projects", link: "#project" },
    { label: "Contact", ariaLabel: "Get in touch", link: "#contact" }
  ];

  const socialItems = [
    { label: "Twitter", link: "https://twitter.com" },
    { label: "GitHub", link: "https://github.com/dnmr09" },
    { label: "LinkedIn", link: "https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BKYZPbWjLQvmWpVX%2BVlCT5Q%3D%3D" }
  ];

  const navigate = (event, item) => {
    event.preventDefault();
    onNavigate(item.link);
  };

  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials
      displayItemNumbering
      menuButtonColor="#111827"
      openMenuButtonColor="#111827"
      changeMenuColorOnOpen
      colors={["#B497CF", "#5227FF"]}
      accentColor="#5227FF"
      isFixed
      onItemClick={navigate}
    />
  );
}
