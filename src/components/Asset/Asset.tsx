import React from "react";
import './Asset.scss'

interface IAssetProps {
  name: string;
  src: string;
}

const Asset = (props: IAssetProps): React.ReactElement => {
  const { name, src } = props;
  return (
    <div className="asset">
      <p className="asset__name">{name}</p>
      <img
        className="asset__image"
        src={`data:image/svg+xml;base64,${src}`}
      />
    </div>
  );
};

export default Asset;
