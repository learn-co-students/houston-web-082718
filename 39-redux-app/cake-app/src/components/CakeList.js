import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function addCake(event) {
  event.preventDefault();

  return {
    type: "ADD_CAKE",
    payload: {
      id: 4,
      name: event.target.name.value,
      icing: event.target.icing.value
    }
  };
}

const CakeList = ({ cakes, onAddCake }) => {
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
          <Link key={cake.name} to={`/cake/${cake.id}`}>
            <p>{cake.name}</p>
          </Link>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cakes: state.cakeList
  };
};

const mapDispatchToProps = {
  onAddCake: addCake
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeList);
