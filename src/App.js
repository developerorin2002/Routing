import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MainLayout from './MainLayout/MainLayout';
import Users from './components/Users/Users';
import SingleUser from './components/SingleUser/SingleUser';
import Posts from './components/Posts/Posts';
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:[
        <MainLayout></MainLayout>,
      ],
      children:[
        {
          path:'/posts',
          element:<Posts></Posts>,
          loader:async()=>{
            return fetch('https://jsonplaceholder.typicode.com/posts')
          }
        },
        {
          path:'/users',
          element:<Users></Users>,
          loader:async()=>{
            return fetch('https://jsonplaceholder.typicode.com/users')
          }
        },
        {
          path:'/users/:userId',
          element:<SingleUser></SingleUser>,
          loader:async ({params})=>{
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
          }
        },
        {
          path:'/dashboard',
          element:<Dashboard></Dashboard>,
          loader:async()=>{
            return fetch('https://jsonplaceholder.typicode.com/users')
          }
        }
      ],
      
    },
    
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
