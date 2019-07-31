import React from "react";
import { Link as GatsbyLink } from "gatsby";
import "./SidebarNav.scss";

interface ISidebarNav {
  children: React.ReactElement;
}

const SidebarNav = (props: ISidebarNav): React.ReactElement => {
  const { children } = props;
  return (
    <aside className="sidebar-nav">
      <GatsbyLink className="sidebar-nav__title-link" to="/">
        <h1 className="title-sm sidebar-nav__title">Heartwood Tokens</h1>
      </GatsbyLink>
      {children}
    </aside>
  );
};

export default SidebarNav;
