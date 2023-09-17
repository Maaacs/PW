class IntegerSet {
    constructor(maxValue) {
        this.maxValue = maxValue;
        this.set = new Array(maxValue).fill(false);
    }

    insert(element) {
        if (element <= this.maxValue) {
            this.set[element] = true;
        }
    }

    delete(element) {
        if (element <= this.maxValue) {
            this.set[element] = false;
        }
    }

    union(setB) {
        let unionSet = new IntegerSet(Math.max(this.maxValue, setB.maxValue));
        for (let i = 0; i <= unionSet.maxValue; i++) {
            unionSet.set[i] = this.set[i] || setB.set[i];
        }
        return unionSet;
    }

    intersection(setB) {
        let intersectionSet = new IntegerSet(Math.min(this.maxValue, setB.maxValue));
        for (let i = 0; i <= intersectionSet.maxValue; i++) {
            intersectionSet.set[i] = this.set[i] && setB.set[i];
        }
        return intersectionSet;
    }

    difference(setB) {
        let differenceSet = new IntegerSet(this.maxValue);
        for (let i = 0; i <= differenceSet.maxValue; i++) {
            differenceSet.set[i] = this.set[i] && !setB.set[i];
        }
        return differenceSet;
    }

    toString() {
        let str = '';
        for (let i = 0; i <= this.maxValue; i++) {
            if (this.set[i]) {
                str += i + ', ';
            }
        }
        return str.slice(0, -2);
    }
}
