import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  state = {
    pets: [],
    filters: {
      type: "all"
    }
  };

  componentDidMount() {
    fetch("/api/pets")
      .then(response => response.json())
      .then(pets => {
        this.setState({ pets });
      });

    const divEl = document.querySelector(".my-html");
    divEl.addEventListener("click", this.listenToMyHtml);

    this.forceUpdate();
  }

  componentWillUpdate(nextProps, nextState) {
    // console.log("Current filter: ", this.state.filters.type);
    // console.log("Next filter: ", nextState.filters.type);
    if (this.state.filters.type !== nextState.filters.type) {
      //Do something in response
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Previous filter: ", prevState.filters.type);
    console.log("Current filter: ", this.state.filters.type);
  }

  componentWillUnmount() {
    const divEl = document.querySelector(".my-html");
    divEl.removeEventListener("click", this.listenToMyHtml);
  }

  listenToMyHtml() {
    alert("CLICKED!!!");
  }

  onChangeType = event => {
    this.setState({
      filters: {
        type: event.target.value
      }
    });
  };

  onFindPetsClick = () => {
    let query = "";

    if (this.state.filters.type !== "all") {
      query = `?type=${this.state.filters.type}`;
    }

    fetch(`/api/pets${query}`)
      .then(response => response.json())
      .then(pets => {
        this.setState({ pets });
      });
  };

  onAdoptPet = id => {
    // update the isAdopted property of the pet we clicked on
    const updatedPetsArray = this.state.pets.map(pet => {
      if (pet.id === id) {
        pet.isAdopted = true;
      }

      return pet;
    });

    this.setState({ pets: updatedPetsArray });
  };

  render() {
    const html =
      '<div class="my-html">Some text that I want a click handler on</div>';

    return (
      <div className="ui container">
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
