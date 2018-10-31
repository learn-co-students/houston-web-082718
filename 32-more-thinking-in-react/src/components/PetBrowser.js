import React from "react";

import Pet from "./Pet";

const PetBrowser = ({ pets, onAdoptPet }) => {
  return (
    <div className="ui cards">
      {pets.map(pet => {
        return <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet} />;
      })}
    </div>
  );
};

// class PetBrowser extends React.Component {
//   render() {
//     return (
//       <div className="ui cards">
//         {this.props.pets.map(pet => {
//           return (
//             <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} />
//           );
//         })}
//       </div>
//     );
//   }
// }

export default PetBrowser;
