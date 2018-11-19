import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { addCake, cakeClick } from "../actions/cake-list";
import { sortedCakeListSelector } from "../selectors/cake-list";

const CakeList = ({ cakes, onAddCake, onCakeClick }) => {
  return (
    <div>
      <h1>ADD CAKE</h1>
      <form onSubmit={onAddCake}>
        <input name="name" placeholder="Name" />
        <input name="icing" placeholder="Icing" />
        <button>Submit</button>
      </form>

      <h1>cakes.</h1>
      {cakes.map(cake => {
        return (
          <Link
            key={cake.name}
            onClick={() => onCakeClick(cake)}
            to={`/cake/${cake.id}`}
          >
            <p>{cake.name}</p>
          </Link>
        );
      })}
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     cakes: state.cakeList
//   };
// };

const mapDispatchToProps = {
  onAddCake: addCake,
  onCakeClick: cakeClick
};

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(
//     {
//       onAddCake: addCake
//     },
//     dispatch
//   );
// };

export default connect(
  sortedCakeListSelector,
  mapDispatchToProps
)(CakeList);
