class Node {
    #value;
    #children;

    constructor(value, children = []) {
        this.#value = value;
        this.#children = children;
    }

    addChild(node) {
        this.#children.push(node);
    }

    reduce(reducer, initialValue) {
        let acc = initialValue;

        for (let child of this.#children) {
            acc = child.reduce(reducer, acc);
        }

        return reducer(acc, this.#value);
    }
}

export default Node;
