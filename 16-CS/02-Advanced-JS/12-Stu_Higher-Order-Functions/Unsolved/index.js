const grades = [56, 78, 99, 85];

// TODO: Complete the 'findAverage' function below.
function findAverage(accumulator, currentValue, index, array) {
    const value = accumulator + currentValue;
if (index === array.lenght - 1) {
    return (accumulator + currentValue); / array.length;
}
    return accumulator + currentValue;
}


// TODO: Pass the 'findAverage' into the reduce method.

const gradeAverage = grades.reduce(findAverage);

console.log(gradeAverage);
