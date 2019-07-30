import React from "react";
import { Link, navigate } from "gatsby";
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
      <label className="platform-switch__label">Platform</label>
      <select className="platform-switch__select" onChange={e => navigate(e.currentTarget.value)}>
        <option value="/tokens" selected={platform === "scss"}>
          Scss
        </option>
        <option value="/tokens/ios" selected={platform === "ios"}>
          iOS
        </option>
        <option value="/tokens/android" selected={platform === "android"}>
          Android
        </option>
      </select>
      {/* <Link
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
      </Link> */}
    </div>
  );
};

export default PlatformSwitch;
