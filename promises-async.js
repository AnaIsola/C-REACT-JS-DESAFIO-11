const myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		//resolve(1000)
	reject(new Error ('Algo malo cocurrio') )
	}, 1000)	
})

// async/await

async function main () {
	try {
	const returnValue = await myPromise
	console.log('success:' returnValue)	
} cath (error) {
	console.log('fallido:', error)
  }
}
main()