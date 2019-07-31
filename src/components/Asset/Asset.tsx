import React from "react";
import downloadIcon from '../../icons/download-icon.svg';
import "./Asset.scss";

interface IAssetProps {
  name: string;
  src: string;
}

const Asset = (props: IAssetProps): React.ReactElement => {
  const { name, src } = props;
  return (
    <div className="asset">
      <p className="asset__name">
        <img className="asset__download-icon" src={downloadIcon} width={14} alt="Click to download" />
        <a
          className="asset__link"
          href={`data:image/svg+xml;base64,${src}`}
          download={name.split(" ").join("-")}
        >
          {name}
        </a>
      </p>
      <img className="asset__image" src={`data:image/svg+xml;base64,${src}`} />
    </div>
  );
};

export default Asset;
