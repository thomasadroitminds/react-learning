import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import '../src/App.css'
import JobPage,{jobLoader} from './pages/JobPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path = "/jobs" element={<JobsPage />} />
      <Route path = "/job/:id" element={<JobPage />} loader={jobLoader}/>
      <Route path ="*" element ={<NotFoundPage />} />
    </Route>
  )
);
// rafce (React Application Functional Component Export)
const App = () => {
  return <RouterProvider router={router} />
}

export default App
