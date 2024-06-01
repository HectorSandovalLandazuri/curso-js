const car = {
    make: 'Chevrolet',
    model: 'Chevy',
    year: 2010,
    colors: ['red','black', 'blue'],
    hybrid: false,
    keys: 2,
    drive () {
        console.log('This car drive');
    },
    stop() {
        console.log('This car stop');
    }
}

console.log(car.make,car.colors[0]);
car.drive();
car.stop();