// desarrollo de objetos para scripts

const prometeo = new Promise((resolve, reject) => {
    //
    setTimeout(() => {
        resolve('Successful')
        reject('exit')
    }, 6000)
})

prometeo.then(resol => {
    console.log(resol)
}).catch(reject => {
    console.error(reject)
}).finally(() => {
    console.log('process final')
})

async function backTime(time) {
    return prometeo
}