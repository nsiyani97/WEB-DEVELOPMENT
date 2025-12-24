import React from "react";
import animals from "./data.js";
import cars from "./practice.js";

function Destructring() {
  // console.log(animals[0]);
  // const [cat, dog] = animals;
  // console.log(cat);

  // const { name, sound } = cat;
  // console.log(sound)

  // costum name for properties:
  // const { name: catName, sound: catSound } = cat;
  // console.log(catName);

  // giving deafult value if data doesn't exists:
  // const { name = "fluffy", sound = "purr"} = cat;
  // console.log(name, sound)

  // nested objects:
  // const {
  //   name,
  //   sound,
  //   feedings: { food, water },
  // } = cat;
  // console.log(water);

  const [honda, tesla] = cars;

  const {speedStats: {topSpeed: teslaTopSpeed}} = tesla
  const {speedStats: {topSpeed: hondaTopSpeed}} = honda

  const {coloursByPopularity: [teslaTopColour]} = tesla
  const {coloursByPopularity: [hondaTopColour]} = honda

  console.log(hondaTopSpeed)

  return (
    <div>
      <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColour}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColour}</td>
        </tr>
      </table>
    </div>
  );
}

export default Destructring;
