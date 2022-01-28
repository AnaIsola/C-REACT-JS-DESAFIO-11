import logo from'logo.png'
import {saludoClass, SaludoFunction} from './components'
import 'App.css'

functiom App() {
return (
	<div className="App">
	<header className = "App-header">
	<img src= {logo} className= "App-logo" alt="logo" />
	<SaludoClass 
	nombre="Ana"
	saludoText="Pronto!"
	children= <p>Soy un hijo</p>
	/>
	<SaludoFunction nombre="Ana" saludoText="Hi" />
	<p> Soy un hijo</p>
	</<SaludoFunction>
	</header>
	</div>


import '/App.css'
import { NavBar, ItemListenerContainer} from './components'
import { Fragment } from 'react'
import * as React from 'react'
import {NavBar, ItemListenerContainer} from './components'

import { SimpleList } from './components/SimpleList'

const listItem = ['audifono','gopro','bateria' ]

function listItemComponent({ text}){
	return<li className="text-red-600">text</lSi>
}
}

export default function App (){
 return(
 	<React.Fragment>
 	<NavBar/>
 	<ItemListContaine/>
 	{/* <SimpleList 
 	listItem ={['audifono','gopro','bateria'} 
 	renderItem={(listenItem) =>{
 	}}
 	/>
 	
 	<SimpleList 
 	listItem ={['Comprar audifono','devolver gopro','comprar bateria']}
    renderItem={(listItem) =>{
 		return <li className="font-bold">{listItem</li>
 	}}
 	/>

 	<SimpleList listItem ={['Navidad','Anio nuevo']}
   {(listItem) => {
 		return <li className="font-bold text-5xl">{listItem</li>/>
 	}}
 />*/}

 	<SimpleList 
 	listItem ={['Navidad','Anio nuevo', 'descansar']}
   {(listItem) => {listItemComponent}

 </React.Fragment>	
 import * as React from 'react'
 import {NavBAr, ItemListenerContainer} from './components'
 import {Counter} from './components/counter'

 export default function App() {
 	return ( 
 	<React.Fragment>
 	<NavBar />
 	<ItemListContainer />
 	</React.Fragment>

	 )
}



