const container = document.getElementById('container');
const points = [];

container.addEventListener('mousemove', (e) => {
    const point = document.createElement('div');
    point.className = 'point';
    point.style.left = e.pageX + 'px';
    point.style.top = e.pageY + 'px';
    container.appendChild(point);
    points.push(point);

    if (points.length > 8) {
        const removedPoint = points.shift();
        container.removeChild(removedPoint);
    }
});
