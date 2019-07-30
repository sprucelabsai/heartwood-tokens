import React from "react";
import { Link } from "gatsby";
import "./PlatformSwitch.scss";

// TODO: Icons

interface PlatformSwitchProps {
  platform: Platform;
  onClick: ({ platform }: { platform: Platform }) => void;
}

const PlatformSwitch = (props: PlatformSwitchProps): React.ReactElement => {
  const { platform, onClick } = props;
  return (
    <div className="platform-switch">
      <Link
        to="/tokens"
        className="platform-switch__btn"
        activeClassName="platform-switch__btn--current"
      >
        Scss
      </Link>
      <Link
        to="/tokens/ios"
        className="platform-switch__btn"
        activeClassName="platform-switch__btn--current"
      >
        iOS
      </Link>
      <Link
        to="/tokens/android"
        className="platform-switch__btn"
        activeClassName="platform-switch__btn--current"
      >
        Android
      </Link>
    </div>
  );
};

export default PlatformSwitch;
