import Layout from './components/Layout'
import {Route, Switch} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'

import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import {theme} from './styles/themeConfig'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/rooms" component={Rooms}/>
              <Route path="/rooms/:slug" component={SingleRoom}/>
              <Route path="/contact" component={Contact}/>
              <Route path="*" component={NotFound}/>
          </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
