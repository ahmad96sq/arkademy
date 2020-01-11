const random = (data) => {
    var a = 0;
    var arr = [];

    for (let i = 0; i <= 100; i++) {
        var b = Math.floor(Math.random() * data);
        b++
        if (b % 2 == true && arr.length < data) {
            arr.push(b)

        }
    }
    console.log("array : [" + arr + "]")
    for (var e = 0; e < data; e++) {
        a += arr[e]
    }
    console.log(a)
}

random(5);