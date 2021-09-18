async function lanzardado(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

async function doTask() {
    let from = 1;
    let to = 10;
    let dado;
    while (from < 11) {
        try {
            dado = await lanzardado(1, 6);
            alert(`lanzamiento ${from}: dado #${dado}`);
            if (dado == 6) {
                break;
            }
        } catch (err) {
            throw err;
        }
        from++;
    }
}
console.log("==========Resultado==========")
doTask();