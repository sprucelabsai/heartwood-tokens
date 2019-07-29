import React from "react";
import cx from "classnames";
import './Layout.scss'
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
    {props.children}
  </div>
);

export default Layout;
