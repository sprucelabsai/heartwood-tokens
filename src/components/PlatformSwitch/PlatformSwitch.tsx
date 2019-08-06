import React from "react";
import { navigate } from "gatsby";
import sassIcon from "../../icons/sass-icon.png";
import jsIcon from '../../icons/js-icon.svg';
import appleIcon from "../../icons/apple-icon.svg";
import androidIcon from "../../icons/android-icon.svg";
import figmaIcon from "../../icons/figma-icon.svg";
import downloadIcon from "../../icons/download-icon.svg";
import "./PlatformSwitch.scss";

interface PlatformSwitchProps {
  platform: Platform;
  tokens?: any;
}

const icons = {
  scss: sassIcon,
  javascript: jsIcon,
  ios: appleIcon,
  android: androidIcon,
  figma: figmaIcon
};

const PlatformSwitch = (props: PlatformSwitchProps): React.ReactElement => {
  const { platform, tokens } = props;
  return (
    <div className="platform-switch">
      <label className="platform-switch__label">Platform</label>
      <div className="platform-switch__select-wrapper">
        {icons[platform] && (
          <img
            src={icons[platform]}
            width={24}
            height={24}
            className="platform-switch__current-icon"
          />
        )}
        <select
          className="platform-switch__select"
          onChange={e => navigate(e.currentTarget.value)}
        >
          <option value="/tokens" selected={platform === "scss"}>
            Scss
          </option>
          <option value="/tokens/javascript" selected={platform === "javascript"}>
            Javascript
          </option>
          <option value="/tokens/ios" selected={platform === "ios"}>
            iOS
          </option>
          <option value="/tokens/android" selected={platform === "android"}>
            Android
          </option>
          <option value="/tokens/figma" selected={platform === "figma"}>
            Figma
          </option>
        </select>
        {tokens && (
          <a
            className="platform-switch__download-btn"
            href={`data:text/json;charset=utf-8,${encodeURIComponent(
              JSON.stringify(tokens, null, 2)
            )}`}
            download={`${platform}-tokens.json`}
          >
            <img src={downloadIcon} width={24} role="presentation" />
          </a>
        )}
      </div>
    </div>
  );
};

export default PlatformSwitch;
