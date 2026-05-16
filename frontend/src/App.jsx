import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { useLocation, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './components/landingPage/Home'
import TopNavbar from './components/landingPage/TopNavbar';
import NavBar from './components/landingPage/Navbar';
import About from './components/landingPage/About'
import Services from './components/landingPage/Services'
import Property from './components/landingPage/Property'
import UserRegister from './components/landingPage/UserRegister'
import Login from './components/landingPage/Login'
import Footer from './components/landingPage/Footer'

import AddProperty from './components/admin/AddProperty'
import AdminPropertylist from './components/admin/AdminPropertyList'
import AdminSoldProperty from './components/admin/AdminSoldProperty'
import UserList from './components/admin/UserList'
import AdminProfile from './components/admin/AdminProfile'
import AdminContactUsList from './components/admin/AdminContactUsList'
import AdminLogout from './components/admin/AdminLogout'

import UserBoughtList from './components/user/UserBoughtList'
import UserProfile from './components/user/UserProfile'
import UserLogout from './components/user/UserLogout'
import NotFound from './NotFound';
import Aos from 'aos';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    setUserData(user);
  }, [location])

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    setUserData(null);
    navigate('/login');
  }

  return (
    <>
      <TopNavbar />
      <NavBar userData={userData} handleLogout={handleLogout} />
      <Routes>
        {/* landing page router */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/property' element={<Property />} />
        <Route path='/register' element={<UserRegister />} />
        <Route path='/login' element={<Login />} />

        {/* admin section */}
        {userData?.userType === "admin" && (
          <>
            <Route path='/admin-add' element={<AddProperty />} />
            <Route path='/admin-list' element={<AdminPropertylist />} />
            <Route path='/admin-sold' element={<AdminSoldProperty />} />
            <Route path='/admin-user' element={<UserList />} />
            <Route path='/admin-profile' element={<AdminProfile />} />
            <Route path='/admin-contact' element={<AdminContactUsList />} />
            <Route path='/admin-logout' element={<AdminLogout />} />
          </>
        )}

        {/* user section */}
        {userData?.userType === "user" && (
          <>
            <Route path='/user-property' element={<Property />} />
            <Route path='/user-bought' element={<UserBoughtList />} />
            <Route path='/user-profile' element={<UserProfile />} />
            <Route path='/user-logout' element={<UserLogout />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;