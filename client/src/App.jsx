import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup_Mentee from './components/SignUp_Mentee';
import Login_Mentee from './components/Login_Mentee';
import Signup_Mentor from './components/Signup_Mentor';
import Login_Mentor from './components/Login_Mentor';
import Home from './components/Home';
import Chat from './components/Chat';
import MenteeDashboard from './components/menteeDashboard/MenteeDashboard';
import { Toaster } from 'react-hot-toast';
import EditProfile from './components/mentorDashboard/dashboardComponents/EditProfile';
import MentorDashboard from './components/mentorDashboard/MentorDashboard';

import EditMenteeProfile from './components/menteeDashboard/DashboardComponents/EditMenteeProfile';


import MentorProfile from './components/ProfilePreview/MentorProfile';
import AllMentorsPage from "./components/AllMentorsPage"
function App() {
  return (
    <>
      <Router>
        <Routes>

          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Main Routes */}
          <Route path="mentee/dashboard/" element={<MenteeDashboard />} />
          <Route path="mentor/dashboard/" element={<MentorDashboard />} />
          <Route path="/profile/:nameId" element={<MentorProfile />} />


          {/* Authentication Routes  */}
          <Route path="/login_mentee" element={<Login_Mentee />} />
          <Route path="/signup_mentee" element={<Signup_Mentee />} />
          <Route path="/login_mentor" element={<Login_Mentor />} />
          <Route path="/signup_mentor" element={<Signup_Mentor />} />

          {/* Chat Routes */}
          <Route path="/mentee/chat/:recipientId" element={<Chat />} />

          {/* Extra Temporary routes */}
          <Route path="/a" element={<EditProfile />} />

          <Route path="/e" element={<EditMenteeProfile />} />
          <Route path="/c" element={<AllMentorsPage />} />


        </Routes>
      </Router>

      <Toaster />
    </>
  )
}

export default App
