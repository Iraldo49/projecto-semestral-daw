import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navibar from './components/layout/Navibar'
import Sidebar from './components/layout/Sidebar'
import Contas from './components/pages/Contas'
import Colaboradores from './components/pages/Colaboradores'
import Dashboard from './components/pages/Dashboard'

function App() {
  return (
    <Router>
      <Navibar/>
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/Colaboradores">
          <Colaboradores />
        </Route>
        <Route path="/Contas">
          <Contas />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
