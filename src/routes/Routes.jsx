import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Login from '../pages/Authentication/Login'
import Register from '../pages/Authentication/Register'
import JobDetails from '../pages/JobDetails'
import AddJob from '../pages/AddJob'
import ErrorPage from '../pages/ErrorPage'
import MyPostedJobs from '../pages/MyPostedJobs'
import UpdateJob from '../pages/UpdateJob'
import PrivateRoute from './PrivateRoute'
import MyBids from '../pages/MyBids'
import BidRequests from '../pages/BidRequests'
import AllJobs from '../pages/AllJobs'
import Dashboard from '../pages/Dashboard'
import Blogs from '../pages/Blogs/Blogs'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/jobs',
        element: <PrivateRoute>
          <AllJobs />
        </PrivateRoute>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <Register />,
      },
      {
        path: '/job/:id',
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
      },
      {
        path: '/update/:id',
        element: (
          <PrivateRoute>
            <UpdateJob />
          </PrivateRoute>
        ),
      },
      {
        path: '/add-job',
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: '/my-bids',
        element: (
          <PrivateRoute>
            <MyBids />
          </PrivateRoute>
        ),
      },
      {
        path: '/my-posted-jobs',
        element: (
          <PrivateRoute>
            <MyPostedJobs />
          </PrivateRoute>
        ),
      },
      {
        path: '/bid-requests',
        element: (
          <PrivateRoute>
            <BidRequests />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        )
      }
    ],
  },
])

export default router
