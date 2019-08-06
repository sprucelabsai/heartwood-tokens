import React from "react";
import cx from "classnames";
import "./SizeUnits.scss";

interface ISizeUnitsProps {
  current: SizeUnit;
  onClick: (unit: SizeUnit) => void;
}

const SizeUnits = (props: ISizeUnitsProps): React.ReactElement => {
  const { current, onClick } = props;

  return (
    <div className="size-units">
      <label className="size-units__label">Size Units</label>
      <button
        className={cx("size-units__btn", {
          "size-units__btn--current": current === "rem"
        })}
        onClick={() => onClick('rem')}
      >
        rem
      </button>
      <button
        className={cx("size-units__btn", {
          "size-units__btn--current": current === "px"
        })}
        onClick={() => onClick('px')}
      >
        px
      </button>
    </div>
  );
};

export default SizeUnits;
