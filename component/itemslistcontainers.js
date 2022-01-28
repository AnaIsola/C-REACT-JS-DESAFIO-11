import { useEffect, useState} from 'react'
import { ItemList } from './ItemList'

const myPromise = new Promise(...)

export function ItemListContainer() {
	const [products, setProducts] = useState([])

	useEffect(() =>{
		myPromise.then(products =>{
			setProducts(products)
			})
		},[])

		


	return <ItemList product ={products} />
}