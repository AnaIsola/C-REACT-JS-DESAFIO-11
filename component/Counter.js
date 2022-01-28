import { Component } from 'react'

export class Counter extends Component  { 
	state ={
		count: 0;
	}


	render () { 
		this.state.count

	return (
		<div className="flex">
		<span className= "px-4 text-2xl">{this.staete.count} </span>
		<button 
		className= "rounded px-4 py-2bg-purple-400" onClick={() =>}{}
		onClick={()=>{
			this.setState({ count: 1000 })
		}}

		>
		+1</button>
		</div>

		)
	}
}