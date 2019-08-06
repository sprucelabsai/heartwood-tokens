import React from "react";
import { Link as GatsbyLink } from "gatsby";
import Footer from "../Footer/Footer";
import logo from '../../images/spruce-logo.svg'
import "./SidebarNav.scss";

interface ISidebarNav {
  children: React.ReactElement;
}

const SidebarNav = (props: ISidebarNav): React.ReactElement => {
  const { children } = props;
  return (
    <aside className="sidebar-nav">
      <div className="sidebar-nav__header">
        <GatsbyLink className="sidebar-nav__title-link" to="/">
          <img className="sidebar-nav__logo" src={logo} width={28} />
          <h1 className="sidebar-nav__title">Heartwood Tokens</h1>
        </GatsbyLink>
      </div>
      <div className="sidebar-nav__inner">{children}</div>
      <Footer />
    </aside>
  );
};

export default SidebarNav;
