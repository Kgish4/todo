import React, { FC, Fragment, memo } from "react";
import searchFragment from "../../utils/highlightText";
interface IHighlightCells {
  text: string;
  filter: string;
}

const HighlightText: FC<IHighlightCells> = ({ text, filter }) => {
  const highlightText = (
    text: string,
    filter: string
  ): JSX.Element[] | null => {
    const matchValue = searchFragment(text, filter);
    const regex = new RegExp(filter, "gi");
    if (matchValue) {
      return text.split(regex).map((s, index, array) => {
        if (index < array.length - 1) {
          const highlightData = matchValue.shift();
          return (
            <Fragment key={s + index}>
              {s}
              <span className="highlight">{highlightData}</span>
            </Fragment>
          );
        }
        return <Fragment key={s + index}>{s}</Fragment>;
      });
    }
    return null;
  };
  if (!highlightText(text, filter)) {
    return <>{text}</>;
  }

  return <>{highlightText(text, filter)}</>;
};

export default memo(HighlightText);
