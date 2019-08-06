import React from "react";
import cx from "classnames";
import Clipboard from "react-clipboard.js";
import ReactTooltip from "react-tooltip";
import './CodeSnippet.scss'

export interface ICodeSnippetProps {
  text: string;
  onSuccessText?: string;
  className?: string;
}

const CodeSnippet = (props: ICodeSnippetProps) => {
  const { text, onSuccessText, className, ...rest } = props;

  return (
    <Clipboard
      className={cx("code-snippet", className)}
      data-clipboard-text={text}
      data-tip={onSuccessText || "Copied to clipboard!"}
      data-event="click"
      data-effect="solid"
      data-place="right"
      onSuccess={() => setTimeout(() => ReactTooltip.hide(), 1500)}
      {...rest}
    >
      <code className="code-snippet__text">{text}</code>
    </Clipboard>
  );
};

export default CodeSnippet;
