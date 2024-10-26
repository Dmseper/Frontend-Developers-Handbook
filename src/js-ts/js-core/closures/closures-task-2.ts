function createIncrement() {
    let count = 0
    function increment(){
        count++
    }
    let message = `Count is ${count}`
    function log(){
        console.log(message)
    }

    return [increment, log]
}


const [increment, log] = createIncrement()
increment()
increment()
increment()
log()

function createIncrement2() {
    let count = 0
    function increment(){
        count++
    }

    function log(){
        let message = `Count is ${count}`
        console.log(message)
    }

    return [increment, log]
}


const [increment2, log2] = createIncrement2()
increment2()
increment2()
increment2()
log2()
