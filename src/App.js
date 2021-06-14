import Layout from './components/Layout'
import {Route, Switch} from 'react-router-dom'

import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Contact from './pages/Contact'

function App() {
  return (
    <Layout>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/rooms" component={Rooms}/>
            <Route exact path="/rooms/:slug" component={SingleRoom}/>
            <Route exact path="/contact" component={Contact}/>
        </Switch>
    </Layout>
  );
}

export default App;
