function getProducts() {
    return [
        //     {
        //     productID: 1,
        //     name: 'Bathroom Tiles',
        //     category: { id: 1, name: 'TILES' },
        //     size: { width: 2, height: 2 }, // 4 sq ft.
        //     type: 'BOX',
        //     noOfPieces: 4, // 4 sq.ft. X 4 pieces = 16 sq.ft.
        //     ratePerQtyORSqFt: 40 // 16 sq.ft X 40 = 640 RS for 16 Sq.ft.
        // },
        {
            productID: 1,
            name: 'Grenite',
            category: { id: 1, name: 'Grenite' },
            size: { width: 4, height: 4 }, // 4 sq ft.
            type: 'PIECE',
            noOfPieces: 1, // 4 sq.ft. X 4 pieces = 16 sq.ft.
            ratePerQtyORSqFt: 40 // 16 sq.ft X 40 = 640 RS for 16 Sq.ft.
        },
    // {
    //     productID: 1,
    //     name: 'Ceramic 2',
    //     category: { id: 1, name: 'CERAMIC' },
    //     size: { width: 40, height: 40 }, // 4 sq ft.
    //     type: 'SLAB',
    //     noOfPieces: 1, // 4 sq.ft. X 4 pieces = 16 sq.ft.
    //     ratePerQtyORSqFt: 40 // 16 sq.ft X 40 = 640 RS for 16 Sq.ft.
    // }
];
}

function getTypes() {
    return ['SLAB', 'PIECE', 'BOX'];
}

const table = [];
function getGreniteSqFtTable() {
    if (!table)
        table = [];
    if (table.length > 0)
        return table;
    let value = 0;
    for (let min = 0, max = min + 3; max <= 144; min = min + 3, max = max + 3) {
        if (min == 0) {
            value = 0.25;
        }
        else
            value = value + 0.25;
        //console.log(min + ',   ' + max + ',   ' + value);
        table.push({ min, max, value });
    }
    return table;
} getGreniteSqFtTable();

function getSqFtFromInches(input) {
    const value = table.filter(t => input >= t.min && input <= t.max);    
    return value[0].value;
}
console.log(getSqFtFromInches(44));
getSqFtFromInches(13);