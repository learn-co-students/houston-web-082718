import React, { Fragment } from "react";

const Sushi = props => {
  const { id, img_url, name, price } = props.sushi;

  const isEaten = props.eatenSushies.includes(id); // [2, 4]

  return (
    <div className="sushi">
      <div
        className="plate"
        onClick={() => {
          if (isEaten) {
            return;
          }

          props.onSushiClick(id, price);
        }}
      >
        {/* Tell me if this sushi has been eaten! */

        isEaten ? null : <img src={img_url} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
};

export default Sushi;
