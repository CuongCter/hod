/* eslint-disable import/no-named-as-default */
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
// import CustomerList from 'src/pages/CustomerList';
import DocumentList from 'src/pages/DocumentList';
import MatriculationSearch from 'src/pages/MatriculationSearch';
import OClassSearch from 'src/pages/OClassSearch';
// import SubjectList from 'src/pages/SubjectList/index';
// import Dashboard from 'src/pages/Dashboard';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
// import ProductList from 'src/pages/ProductList';
import Home from 'src/pages/Home';
// import Settings from 'src/pages/Settings';
import ForgetPassword from 'src/pages/ForgetPassword';
import ResetPassword from 'src/pages/ResetPassword';
// eslint-disable-next-line import/no-named-as-default-member
import Profile from 'src/pages/Profile';
import PrivateComponent from 'src/components/PrivateComponent';
import Register from 'src/pages/Register';
import UserProfile from './pages/UserProfile';

const routes = () => [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      {
        path: 'account',
        element: (
          <PrivateComponent>
            <Profile />
          </PrivateComponent>
        )
      },
      // { path: 'customers', element: <CustomerList /> },
      // { path: 'dashboard', element: <Dashboard /> },
      // { path: 'products', element: <ProductList /> },
      // { path: 'subjects', element: <SubjectList /> },
      { path: 'documents', element: <DocumentList /> },
      {
        path: 'searching',
        // element: <MatriculationSearch />,
        element: <OClassSearch />
        // children: [{ path: 'o-class', element: <OClassSearch /> }]
      },
      // { path: 'settings', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'forget-password', element: <ForgetPassword /> },
      { path: 'reset-password/:resetToken', element: <ResetPassword /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Home /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: 'user/:id',
    element: <UserProfile />
  },
  { path: '*', element: <Navigate to="/404" /> }
];

export default routes;
