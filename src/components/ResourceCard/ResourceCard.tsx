import React from "react";
import cx from 'classnames';
import Card, { ICardProps } from "../Card/Card";
import './ResourceCard.scss'

interface IResourceCardProps extends ICardProps {
  href: string;
  className?: string,
  target?: string,

}

const ResourceCard = (props: IResourceCardProps): React.ReactElement => {
  const { href, icon, children, className, target } = props;

  return (
    <a href={href} className={cx('resource-card', className)} target={target}>
      <Card icon={icon}>{children}</Card>
    </a>
  );
};

export default ResourceCard;
