
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,  Routes } from 'react-router-dom';

import AddCampaign from './Pages/Dashboard/AddCampaign/AddCampaign';

import Routesin from './Pages/Routes/Routesin';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageCampaign from './Pages/Dashboard/ManageCampaign/ManageCampaign';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateCampaign from './Pages/Dashboard/ManageCampaign/UpdateCampaign';
import AddEvent from './Pages/Dashboard/ManageEvent/AddEvent';
import ManageEvent from './Pages/Dashboard/ManageEvent/ManageEvent';
import UpdateEvent from './Pages/Dashboard/ManageEvent/UpdateEvent';
import User from './Pages/Dashboard/Users/User';

import RequireAdmin from './Pages/Login/RequireAdmin';
import Info from './Pages/Dashboard/Info';
import AddImam from './Pages/Dashboard/AddImam';
import AddExpert from './Pages/Dashboard/ManageExpert/AddExpert';
import Khutba from './Pages/Dashboard/Khutba/Khutba';

import Sidebar from './Pages/Dashboard/Sidebar/Sidebar';
import ManageKhutba from './Pages/Dashboard/Khutba/ManageKhutba';

import { Toaster } from 'react-hot-toast';
import ModifyExperts from './Pages/Dashboard/ManageExpert/ModifyExperts';
import UpdateExpert from './Pages/Dashboard/ManageExpert/UpdateExpert';
import ProfileUpdate from './Pages/Dashboard/ProfileUpdate/ProfileUpdate';


function App() {
  return (

    <div>
      <Routes>
        <Route path="/dashboard" element={<Sidebar></Sidebar>}  >
          <Route path="addcampaign" element={<AddCampaign></AddCampaign>} />
          <Route path="users" element={<RequireAdmin> <User></User> </RequireAdmin>} />
          <Route path="addevent" element={<RequireAdmin><AddEvent></AddEvent></RequireAdmin>} />
          <Route path="addnewproduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>} />


          <Route path="managecampaign" element={<RequireAdmin><ManageCampaign></ManageCampaign></RequireAdmin>} />
          <Route path="manageevent" element={<RequireAdmin><ManageEvent></ManageEvent></RequireAdmin>} />
          <Route path="managekhutba" element={<RequireAdmin><ManageKhutba></ManageKhutba></RequireAdmin>} />

          <Route path="profile" element={<Info></Info>} />
          <Route path="updateProfile/:email" element={<ProfileUpdate></ProfileUpdate>} />
         

          <Route path="imam" element={<RequireAdmin><AddImam></AddImam></RequireAdmin>} />
          <Route path="addscolar" element={<RequireAdmin><AddExpert></AddExpert></RequireAdmin>} />
          <Route path="modifyExperts" element={<RequireAdmin><ModifyExperts></ModifyExperts></RequireAdmin>} />
          
          <Route path="experts/:id" element={<RequireAdmin><UpdateExpert></UpdateExpert></RequireAdmin>} />

          <Route path="addkhutba" element={<RequireAdmin><Khutba></Khutba></RequireAdmin>} />



          <Route path='updatecampaign/:id' element={<RequireAdmin><UpdateCampaign></UpdateCampaign></RequireAdmin>}></Route>
          <Route path='updateevent/:id' element={<RequireAdmin><UpdateEvent></UpdateEvent></RequireAdmin>}></Route>

        </Route>

        <Route path="*" element={<Routesin></Routesin>} />
      </Routes>
      <Toaster></Toaster>
      <ToastContainer></ToastContainer>
    </div>

  );
}
export default App;
