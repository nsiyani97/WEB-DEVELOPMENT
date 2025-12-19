/*
Create a JavaScript object car with properties brand, model, and year. UseJavaScript
to:
• Access and print the car’s brand and model.
• Update the year property.
• Add a new property color to the car object.
*/

// Create the car object
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

// Access and print the car's brand and model
console.log("Brand:", car.brand);
console.log("Model:", car.model);

// Update the year property
car.year = 2023;

// Add a new property color
car.color = "White";

// Print the updated car object
console.log(car);

/* output:
Brand: Toyota
Model: Corolla
{
  brand: 'Toyota',
  model: 'Corolla',
  year: 2023,
  color: 'White'
}
*/
