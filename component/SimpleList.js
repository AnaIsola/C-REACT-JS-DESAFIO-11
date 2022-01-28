export function SimpleList ({listItem, listItemComponent: listen}) {
	const listItem = listItemComponent


	return ( 
	<ul className ="border-2 border-red-300">
	{listItem.map( item => {
			return <listItem text ={item}/>
			})}
	</ul>

	
	)

}