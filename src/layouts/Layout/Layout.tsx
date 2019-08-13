import React from "react";
import cx from "classnames";
import SEO from "../../components/SEO/SEO";
import Footer from "../../components/Footer/Footer";
import "./Layout.scss";
import "../../stylesheets/import-once.scss";

interface ILayoutProps {
  children: any;
  hasLeftSidebar?: boolean;
}

const Layout = (props: ILayoutProps): React.ReactElement => (
  <div
    className={cx("layout", {
      "layout--has-left-sidebar": props.hasLeftSidebar
    })}
  >
    <SEO title="Intro" />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
