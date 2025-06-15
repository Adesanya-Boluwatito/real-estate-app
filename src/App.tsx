import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import './App.css'
import { mockData } from './data/mockData'
import TowerView from './components/TowerView'
import FloorView from './components/FloorView'
import ApartmentView from './components/ApartmentView'
import ApartmentDetails from './components/ApartmentDetails'
import Header from './components/Header';
import Footer from './components/Footer';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <main className={location.pathname === '/' ? '' : 'page-main'}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<TowerView towers={mockData} />} />
            <Route path="/towers/:towerId" element={<FloorView />} />
            <Route path="/towers/:towerId/floors/:floorId" element={<ApartmentView />} />
            <Route path="/towers/:towerId/floors/:floorId/apartments/:apartmentId" element={<ApartmentDetails />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App
