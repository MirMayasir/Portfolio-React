
import Home from '/src/Components/Home/home.jsx'

class App  {
  render() {
    return (
        <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>
      
    );
  }
}

export default App;
