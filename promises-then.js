const myPromise = new Promise ((resolve, reject) => {
	resolve(1000)
// reject(new( 'Algo malo currio'))
})

function onSuccess(returnValue) {
	console.log({returnValue})
	throw new Error ('boom')
}

function onFailure(error){
	console.log('fallido', error)
}

myPromise.then(onSuccess, onFailure). catch( error => {
	console.log('boom error', error)
	return 0
}).then{defaultValue =>{
	console.log({ defaultValue})
}}

