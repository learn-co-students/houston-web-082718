import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const CakeDetail = ({
  name,
  icing,
  url = "http://www.chickytreats.com/wp-content/uploads/2017/02/Dolphin-Fondant-Cake-4-940x624.jpg"
}) => {
  return (
    <div>
      <Link to="/">
        <h1>Back to cake List</h1>
      </Link>
      <h3>Name: {name}</h3>
      icing:{" "}
      <span style={{ color: "purple", fontSize: 200 }}>{String(icing)}</span>
      <img src={url} alt={name} />
    </div>
  );
};

const mapStateToProps = state => {
  const id = window.location.pathname.split("/cake/")[1];
  const cake = state.cakeList.find(cake => cake.id === Number(id));
  return cake;
};

export default connect(mapStateToProps)(CakeDetail);
