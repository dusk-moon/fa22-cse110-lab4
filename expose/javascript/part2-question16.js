let statistic = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (let car in statistic) {
    if (car[0] == 'r' || statistic[car] % 2 == 1) {
        console.log(statistic[car]);
    }
}