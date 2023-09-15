import Header from './components/header';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import WhatWeDo from './components/whatwedo';
// import Resources from './components/resources';
import Calendar from './components/calendar';
import Popcorn from './components/popcorn';
import ContactUs from './components/contactus';
import Leadership from './components/leadership';
import ParentResources from './components/parents';
import LeaderResources from './components/leaders';


function App() {
  return (
    <Router>
      <div className='container-xxl'>
        <div className='App'>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/website' element={<Home />} />
            <Route path='/whatwedo' element={<WhatWeDo />} />
            <Route path='/popcorn' element={<Popcorn />} />
            <Route path='/leaders' element={<LeaderResources />} />
            <Route path='/parents' element={<ParentResources />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/leadership' element={<Leadership />} />
            <Route path='/contact' element={<ContactUs />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;











