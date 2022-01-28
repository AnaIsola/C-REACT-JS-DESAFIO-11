import { ItemDetail} from "./Item"

function fetchItem(){
	return new Promise ((resolve) => {
		resolve ({...})

	})

}

export function ItemDetailContainer () {
	const [item, setItem] = React.useState() 

	React.useEffect(() => { 
		const data =await fetchItem() { 

		setItem(data)
	}

	populateState()

}, [])

	console.log({ pokemons })

	return <ItemDetail item ={item} />