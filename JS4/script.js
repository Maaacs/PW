function calculateCircleProperties(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    const circumference = 2 * Math.PI * radius;
    return { area, circumference };
}
