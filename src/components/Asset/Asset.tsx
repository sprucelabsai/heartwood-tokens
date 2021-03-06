import React from "react";
import cx from 'classnames'
import downloadIcon from "../../icons/download-icon.svg";
import "./Asset.scss";

interface IAssetProps {
  name: string;
  src: string;
  canDownload: boolean;
  isNightMode?: boolean
}

const Asset = (props: IAssetProps): React.ReactElement => {
  const { name, src, canDownload, isNightMode } = props;
  const style = {
    padding: '1rem',
    borderRadius: '4px',
    backgroundColor: isNightMode ? '#2c323d' : 'transparent'
  }
  return (
    <div className="asset">
      <p className="asset__name">
        {canDownload ? (
          <a
            className="asset__link"
            href={`data:image/svg+xml;base64,${src}`}
            download={name.split(" ").join("-")}
          >
            <img
              className="asset__download-icon"
              src={downloadIcon}
              width={14}
              alt="Click to download"
            />
            <span>{name}</span>
          </a>
        ) : (
          <span className="asset__name">{name}</span>
        )}
      </p>
      <div style={style}>
      <img className="asset__image" src={`data:image/svg+xml;base64,${src}`} />
      </div>
    </div>
  );
};

Asset.defaultProps = {
  isNightMode: false
}

export default Asset;
