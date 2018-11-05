import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushies
          .slice(props.startIndex, props.startIndex + 4)
          .map(sushi => {
            return (
              <Sushi
                key={sushi.id}
                sushi={sushi}
                onSushiClick={props.onSushiClick}
                eatenSushies={props.eatenSushies}
              />
            );
          })}
        <MoreButton onMoreButtonClick={props.onMoreButtonClick} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
