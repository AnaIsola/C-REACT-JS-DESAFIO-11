cons myPromise = new Promise (( resolve, reject) => {
	resolve(1000)
// reject (new Error ('Algo malo ocurrio'))
})


 
 function on onSuccess (returnValue){
 	console.log({returnValue})
 	throw new Error ('boom!')
 	console.log ('exitoso:', returnValue)
}

function onFailure(error) {
	console.log('fallido:', error)
}

myPromise.then(onSuccess. onFailure).catch(error => {
	console.log( 'boom error', error)
	return 0
}).then (defaultValue => {
	console.log({ defaultValue })
})


