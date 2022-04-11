const arr = [
    new Promise(() => {}),
    new Promise(() => {}),
]

arr.map(e => {
    console.log(e, 'e')
})