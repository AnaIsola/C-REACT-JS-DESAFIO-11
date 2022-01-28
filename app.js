import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { NavBar} from './components'

import HomePage from './Home'
import CartPage from './Cart'
import ProductDetailPage from './ProductDetail'

export default function App() {
	return(
		<BrowserRouter>
		<div className="flex felx-col">
			<NavBar />
			<div className='flex-flex-col mt-24'>

   			<Switch>
				<Route  exact path="/">
				<HomePage />
				</Route>
				<Route path="/cart">
				 <CartPage />
				 <Route path="/productId">
					 <ProductDetailPage />
				 </Route>
				</Route>
			</Switch>
		</div>
		</div>
		</BrowserRouter>
	)
}