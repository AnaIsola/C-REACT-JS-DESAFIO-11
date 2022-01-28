import { Fragment, useStsate} from 'react'

import "./styles.css";

export default function App () {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout (() => {
			setLoading(false);
		}, 10000);
	}, []);

	const loaderElement = loading ? <h2>Loading...</h2> : <h3>loaded!</h3>

	return ( 
	<Fragment>
		<h1>Example 1</h1>
		{loading ? <h2>loading...</h2> : <h3>loaded!</h3>}
		{loaderElement}
	</Fragment>
	);
}

function Example2({ flag }) {
	if ( flag ) {
		return {
			<div> 
			<h1> El flag es verdadero</h1>
			</div>
		};
	}

	return <h1>El flag es falso</h1>;
}
export default function App () {
	return <Example2 flag/>
}

function BlueTitle {( children)} {
	return <h1> style = {{ color: "blue"}} > {chlidren} </h1>

}

function Tecnica5({ colorSchema}) {
	const TtleComponent = colorSchema === " red" ? RedTitle _ BlueTitle
	 return <TitleComponent> Soy el titulo</TitleComponent>

}

function ConditionalProps({ flag}) {
	return <h1 style={{ color: flag ? "red" : " green "}} className={flag ? 'red'}> Soy un titulo </h1>
}

export default function App {
	return <ConditionalProps flag />
}