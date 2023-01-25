function promiseTimrout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}
console.log('Strat');
promiseTimrout(2000)
    .then(() => {
        console.log("Done!!");
        return promiseTimrout(1000);
    })
    .then(() => {
        console.log("Also done!!");
        return Promise.resolve(42);
    })
    .then((result) => {
        console.log(result);
    })
    .catch(() => {
        console.log("Error!")
    });
console.log('End');