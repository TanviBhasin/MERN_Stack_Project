import './App.css';
import Contact from './components/pages/Contact'
import About from './components/pages/About';
import Courses from './components/pages/Courses';
import Home from './components/pages/Home';
import Error from './components/pages/Error';
import Login from './components/auth/Login';
import Master from './components/layout/Master'
import AdminMaster from './components/layout/AdminMaster';
import Dashboard from './components/admin/Dashboard';
import Privacy from './components/pages/Privacy';
import TermsConditions from './components/pages/TermsConditions';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLogin from './components/auth/AdminLogin';
import TeacherLogin from './components/auth/TeacherLogin';
import TeacherMaster from './components/layout/TeacherMaster';
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify';
import ChangePassword from './components/auth/ChangePassword';
import AddDept from './components/admin/AddDept';
import ManageDept from './components/admin/ManageDept';
import EditDept from './components/admin/EditDept';
import AddCourses from './components/admin/AddCourses';
import ManageCourses from './components/admin/ManageCourses';
import EditCourses from './components/admin/EditCourses';
import AddBranch from './components/admin/AddBranch';
import ManageBranch from './components/admin/ManageBranch';
import EditBranch from './components/admin/EditBranch';
import AddSubject from './components/admin/AddSubject';
import ManageSubject from './components/admin/ManageSubject';
import EditSubject from './components/admin/EditSubject';
import AddStaff from './components/admin/AddStaff';
import ManageStaff from './components/admin/ManageStaff';
import EditStaff from './components/admin/EditStaff';
import AssignSubject from './components/admin/AssignSubject';
import EditAssignSub from './components/admin/EditAssignSub';
import ManageAssignSub from './components/admin/ManageAssignSub';
import AddStudent from './components/admin/AddStudent';
import ManageStudent from './components/admin/ManageStudent';
import EditStudent from './components/admin/EditStudent';
import FeedbackView from './components/admin/FeedbackView';
import ViewAssignedClasses from './components/teacher/ViewAssignedClasses';
import AddMaterial from './components/teacher/AddMaterial';
import EditMaterial from './components/teacher/EditMaterial';
import ManageMaterial from './components/teacher/ManageMaterial';
import ManageAssignment from './components/teacher/ManageAssignment';
import ViewAnswers from './components/teacher/ViewAnswers';
import AddMarks from './components/teacher/AddMarks';
import AddMeeting from './components/teacher/Meeting';
import Announcements from './components/teacher/Announcements';
import ViewAnnouncement from './components/pages/ViewAnnouncement';
import Material from './components/pages/Material';
import MaterialDetail from './components/pages/MaterialDetail';
import ViewAssignments from './components/pages/ViewAssignments';
import AssignmentDetails from './components/pages/AssignmentDetails';
import AddAssignment from './components/teacher/AddAssignment';
import EditAssignment from './components/teacher/EditAssignment';
import UploadAnswer from './components/pages/UploadAnswer';
import Marks from './components/pages/Marks';
import JoinMeeting from './components/pages/JoinMeeting';

function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
   <Route path='/*' element={<Error/>}/>

    <Route path='/' element={<Master/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/announcements' element={<ViewAnnouncement/>}/>
      <Route path='/material' element={<Material/>}/>
      <Route path='/detail/:id' element={<MaterialDetail/>}/>
      <Route path='/uploadassignment/:id' element={<UploadAnswer/>}/>
      <Route path='/assignments' element={<ViewAssignments/>}/>
      <Route path='/viewmarks' element={<Marks/>}/>
      <Route path='/assignmentsdetails/:id' element={<AssignmentDetails/>}/>
      <Route path='/join' element={<JoinMeeting/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/changepassword" element={<ChangePassword/>}/>
      <Route path='/privacy' element={<Privacy/>}/>
      <Route path='/terms' element={<TermsConditions/>}/>
    </Route>
 
    <Route path="/admin" element={<AdminMaster/>}>
          <Route path='/admin' element={<Dashboard/>}/>
          <Route path="/admin/coursesa" element={<Courses/>}/>
          <Route path="/admin/adddept" element={<AddDept/>}/>
          <Route path="/admin/managedept" element={<ManageDept/>}/>
          <Route path="/admin/editdept/:id" element={<EditDept/>}/>
          <Route path="/admin/addcourses" element={<AddCourses/>}/>
          <Route path="/admin/managecourses" element={<ManageCourses/>}/>
          <Route path="/admin/editcourses/:id" element={<EditCourses/>}/>
          <Route path="/admin/addbranch" element={<AddBranch/>}/>
          <Route path="/admin/managebranch" element={<ManageBranch/>}/>
          <Route path="/admin/editbranch/:id" element={<EditBranch/>}/>
          <Route path="/admin/addsubject" element={<AddSubject/>}/>
          <Route path="/admin/managesubject" element={<ManageSubject/>}/>
          <Route path="/admin/manageassignsub" element={<ManageAssignSub/>}/>
          <Route path="/admin/editsubject/:id" element={<EditSubject/>}/>
          <Route path="/admin/editassignsub/:id" element={<EditAssignSub/>}/>
          <Route path="/admin/assign" element={<AssignSubject/>}/>
          <Route path="/admin/addsubject" element={<AddSubject/>}/>
          <Route path="/admin/addstaff" element={<AddStaff/>}/>
          <Route path="/admin/managestaff" element={<ManageStaff/>}/>
          <Route path="/admin/editstaff/:id" element={<EditStaff/>}/>
          <Route path="/admin/addstudent" element={<AddStudent/>} />
          <Route path="/admin/managestudent" element={<ManageStudent/>} />
          <Route path="/admin/editstudent/:id" element={<EditStudent/>} />
          <Route path="/admin/feedback" element={<FeedbackView/>} />
          <Route path="/admin/login" element={<AdminLogin/>}/>
          <Route path="/admin/changepassword" element={<ChangePassword/>}/>
    </Route>
    <Route path="/teacher" element={<TeacherMaster/>}>
          <Route path='/teacher' element={<Home/>}/>
          <Route path='/teacher/about' element={<About/>}/>
          <Route path='/teacher/viewassign' element={<ViewAssignedClasses/>}/>
          <Route path='/teacher/addmeeting' element={<AddMeeting/>}/>
          <Route path='/teacher/addmaterial' element={<AddMaterial/>}/>
          <Route path='/teacher/editmaterial/:id' element={<EditMaterial/>}/>
          <Route path='/teacher/managematerial' element={<ManageMaterial/>}/>
          <Route path='/teacher/addassignment' element={<AddAssignment/>}/>
          <Route path='/teacher/editassignment/:id' element={<EditAssignment/>}/>
          <Route path='/teacher/manageassignment' element={<ManageAssignment/>}/>
          <Route path='/teacher/answers' element={<ViewAnswers/>}/>
          <Route path='/teacher/addmarks/:id' element={<AddMarks/>}/>
          <Route path='/teacher/announce' element={<Announcements/>}/>
          <Route path="/teacher/login" element={<TeacherLogin/>}/>
          <Route path="/teacher/changepassword" element={<ChangePassword/>}/>
    </Route>

    </Routes>
    </BrowserRouter>

    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />

    </>
  );
}

export default App;
