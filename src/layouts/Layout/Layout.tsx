import React from "react";
import cx from "classnames";
import Helmet from "react-helmet";
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
    <Helmet>
      <title>Heartwood Tokens</title>
    </Helmet>
    {props.children}
  </div>
);

export default Layout;
