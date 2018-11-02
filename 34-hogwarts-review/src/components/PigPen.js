import React, { Component } from 'react';
import PigCard from './PigCard';
import Filter from './Filter';
import hogs from '../porkers_data.js';

class PigPen extends Component {
  state = {
    orderBy: 'name',
    filter: false
  };

  changeOrderBy = e => {
    this.setState({ orderBy: e.target.value });
  };

  toggleFilter = () => {
    this.setState(stateSnapShot => {
      return { filter: !stateSnapShot.filter };
    });
  };

  sortByName(hogs) {
    return hogs.sort((hag, hbg) => {
      return hag.name.localeCompare(hbg.name);
    });
  }

  sortByWeight(hogs) {
    return hogs.sort((hag, hbg) => {
      return (
        hbg[
          'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
        ] -
        hag[
          'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
        ]
      );
    });
  }

  render() {
    const filteredHogs = this.state.filter
      ? hogs.filter(hog => hog.greased)
      : [...hogs];
    const sortedHogs =
      this.state.orderBy === 'name'
        ? this.sortByName(filteredHogs)
        : this.sortByWeight(filteredHogs);
    return (
      <div>
        <Filter
          handleChange={this.changeOrderBy}
          handleCheck={this.toggleFilter}
        />
        {sortedHogs.map(hog => {
          return <PigCard {...hog} key={hog.name} />;
        })}
      </div>
    );
  }
}

export default PigPen;
