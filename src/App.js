import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import CheckoutPage from './components/CheckoutPage';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRouter';
import PageNotFound from './components/PageNotFound';

function App() {

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<><Login /></>}></Route>
            {/* <Route path="/checkout" element={<><Header /><CheckoutPage /></>}></Route> */}
            {/* <Route path="/dashboard" element={<><Header /><Home /></>} /> */}
            <Route
              path="/dashboard"
              element={<ProtectedRoute component={Home}></ProtectedRoute>}
            />
            <Route
              path="/checkout"
              element={<ProtectedRoute component={CheckoutPage}></ProtectedRoute>}
            />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
