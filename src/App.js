import './App.css';
import {  Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"


//components
import Dashboard from './components/dashboard.component';
import AddCert from './components/add-cert.component';
import EditCert from './components/edit-cert.component';
import Navbar from './components/navbar.component';



class App extends Component {
  render() {
    return (
      <div>

        <Navbar />
        <br />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add" element={<AddCert />} />
            <Route path="/edit/:id" element={<EditCert />} />
          </Routes>
        </div>
      </div>

    )
  }
}

export default App;
