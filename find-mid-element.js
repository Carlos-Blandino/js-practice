function midElement(items) {
    let midElement = 0;
    let element = 0;
    if (items.length % 2 === 0) {
        midElement = items.length / 2 - 1;
        element = items[midElement];
    } else {
        //let remainder = items.length % 2;
        midElement = Math.floor(items.length / 2);
        console.log(midElement);
        element = items[midElement];
    }
    return element;
}
middleElement([2, 5, 7, 10, 34]);