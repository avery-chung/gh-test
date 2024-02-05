import Node from '../Node.js';

test('Sum tree', () => {
    const root = new Node(2);
    const node1 = new Node(3);
    const node2 = new Node(5);
    const node3 = new Node(7);
    const node4 = new Node(11);
    const node5 = new Node(13);

    root.addChild(node1);
    root.addChild(node2);
    root.addChild(node3);
    node3.addChild(node4);
    node4.addChild(node5);

    const sumReducer = (acc, cur) => (acc + cur);
    expect(root.reduce(sumReducer, 0)).toBe(2 + 3 + 5 + 7 + 11 + 13);
});
