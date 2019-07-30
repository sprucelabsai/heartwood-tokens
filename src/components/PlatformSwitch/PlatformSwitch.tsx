import React from "react";
import { navigate } from "gatsby";
import sassIcon from "../../icons/sass-icon.png";
import appleIcon from "../../icons/apple-icon.svg";
import androidIcon from "../../icons/android-icon.svg";
import "./PlatformSwitch.scss";

interface PlatformSwitchProps {
  platform: Platform;
  onClick: ({ platform }: { platform: Platform }) => void;
}

const icons = {
  scss: sassIcon,
  ios: appleIcon,
  android: androidIcon
};

const PlatformSwitch = (props: PlatformSwitchProps): React.ReactElement => {
  const { platform, onClick } = props;

  return (
    <div className="platform-switch">
      <label className="platform-switch__label">Platform</label>
      <div className="platform-switch__select-wrapper">
        {icons[platform] && (
          <img src={icons[platform]} width={24} height={24} className="platform-switch__current-icon" />
        )}
        <select
          className="platform-switch__select"
          onChange={e => navigate(e.currentTarget.value)}
        >
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
      </div>
    </div>
  );
};

export default PlatformSwitch;
