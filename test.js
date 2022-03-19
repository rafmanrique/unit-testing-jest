// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 119.21 yen", function(){
    const { fromDollarToYen } = require('./app.js')

    const yen = fromDollarToYen(2)

    const expected = 2 * 119.21; 

     expect(fromDollarToYen(2)).toBe(238.42);
})

test("One yen should be 0.0064 pounds", function(){
    const { fromYenToPound } = require('./app.js')

    const pounds = fromYenToPound(2000)

    const expected = 2000 * 0.0064; 

     expect(fromYenToPound(2000)).toBe(12.8);
})