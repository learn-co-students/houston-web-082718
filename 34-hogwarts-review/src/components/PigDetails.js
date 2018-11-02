import React from 'react';

export default function PigDetails(props) {
  return (
    <div>
      <p>
        weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator
        with Thru-the-Door Ice and Water:
        {` ${
          props[
            'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
          ]
        }`}
        <p>
          specialty:
          {` ${props.specialty}`}
        </p>
        <p className="achievementText">
          medal: {props['highest medal achieved']}
        </p>
        <p>greased: {`${props.greased}`}</p>
      </p>
    </div>
  );
}
