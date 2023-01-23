    import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

    import Header from "./components/header"
    import Home from "./pages/Home"
    import Signup from "./pages/Signup"
    import Signin from "./pages/Signin"

    function App() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/signin" element={<Signin />} />
                        {/* <Route path="/profile/:id" element={<Profile />} /> */}
                    </Routes>
                    
                </div>
            </Router>
        );
    }
  
    export default App;