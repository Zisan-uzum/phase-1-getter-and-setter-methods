// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
    get circumference() {
        return 2 * Math.PI * this.radius;
    }
    get area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    set diameter(radius) {
        this.radius = radius / 2;
    }
    set circumference(length) {
        this.radius = length / (2 * Math.PI);
    }
    set area(area) {
        this.radius = Math.sqrt(area / Math.PI);
    }
}
