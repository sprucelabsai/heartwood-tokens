import React from "react";
import "./Card.scss";

export interface ICardProps {
  icon?: {
    src: string;
    width?: number;
    alt?: string;
  };
  children: React.ReactElement;
}

const Card = (props: ICardProps) => {
  const { icon, children } = props;

  return (
    <div className="card">
      {icon && (
        <img
          className="card__icon"
          src={icon.src}
          width={icon.width && icon.width}
          alt={icon.alt || ""}
        />
      )}
      <div className="card__body">{children}</div>
    </div>
  );
};

export default Card;
