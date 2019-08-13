import React from "react";
import { navigate } from "gatsby";
import sassIcon from "../../icons/sass-icon.png";
import jsIcon from "../../icons/js-icon.svg";
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
          onChange={e => {
            if (e.currentTarget.value === "scss") {
              navigate(`/tokens`);
            } else {
              navigate(`/tokens/${e.currentTarget.value}`);
            }
          }}
          defaultValue={platform}
        >
          <option value="scss" data-destination="/tokens">
            Scss
          </option>
          <option value="javascript" data-destination="/tokens/javascript">
            Javascript
          </option>
          <option value="ios" data-destination="/tokens/ios">
            iOS
          </option>
          <option value="android" data-destination="/tokens/android">
            Android
          </option>
          <option value="figma" data-destination="/tokens/figma">
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
