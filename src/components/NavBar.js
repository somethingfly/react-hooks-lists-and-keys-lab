import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const hrefLinks = links.map((link) => {
   return <a key={link} href={"#" + link}>{link}</a>;
  });
  return <nav>{hrefLinks}</nav>;
}

export default NavBar;