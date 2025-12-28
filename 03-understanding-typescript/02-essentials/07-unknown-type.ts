// any type allows you to use the value without checking the type
function processAnyData(val: any) {
    return val.toFixed(2); // no error because any type allows you to use the value without checking the type
}

// unknown type forces you to check the type before using the value
function processData(val: unknown) {

    // return val.toFixed(2); // error because unknown type is not a valid type

    // check the type before using the value
    if (typeof val === 'number') {
        return val.toFixed(2);
    }

    return val;
}