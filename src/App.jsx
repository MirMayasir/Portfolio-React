
import Home from '/src/Components/Home/home.jsx'

class App extends Component {
  render() {
    return (
        <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
      
    );
  }
}

export default App;
