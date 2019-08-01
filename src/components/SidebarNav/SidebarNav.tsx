import React from "react";
import { Link as GatsbyLink } from "gatsby";
import Footer from "../Footer/Footer";
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
          <h1 className="title-sm sidebar-nav__title">Heartwood Tokens</h1>
        </GatsbyLink>
      </div>
      <div className="sidebar-nav__inner">{children}</div>
      <Footer />
    </aside>
  );
};

export default SidebarNav;
