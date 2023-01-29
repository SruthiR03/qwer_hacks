import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';

import CreateDoctor from './components/CreateDoctor';
import DoctorCard from './components/DoctorCard';
import ShowDoctorList from './components/ShowDoctorList';
import ShowDoctorDetails from './components/ShowDoctorDetails';

import ShowLandingPage from './components/ShowLandingPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<ShowLandingPage />} />
          <Route exact path='/hospital-list' element={<ShowBookList />} />
          <Route path='/create-book' element={<CreateBook />} />
          <Route path='/edit-book/:id' element={<UpdateBookInfo />} />
          <Route path='/show-book/:id' element={<ShowBookDetails />} />

          <Route exact path='/doctor-list' element={<ShowDoctorList />} />
          <Route path='/create-doctor' element={<CreateDoctor />} />
          <Route path='/show-doctor/:id' element={<ShowDoctorDetails />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
