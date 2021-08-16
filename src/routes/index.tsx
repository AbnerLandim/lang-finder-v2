import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../pages/Home'
import List from '../pages/List'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/list" component={List} />
    </BrowserRouter>
  )
}

export default Routes
