// import { createBrowserRouter } from "react-router";
// import MainLayout from "../Layout/MainLayout";
// import Favorite from "../Favorite/Favorite";
// import About from "../About/About";

//  export const router =createBrowserRouter([
//     {
//     path:'/',
//     Component:MainLayout,
//     errorElement:<p>Error</p>,
//     children:[
//         {
//             path:'/',
//             element:<Home />,
//         },

//         {
//             path:'/favorite',
//             Component:Favorite,
//         },

//         {
//             path:'/about',
//             element:<About></About>,
//           },
          
//     ],
//     },
    
//   ])
//   export default router





import { createBrowserRouter } from 'react-router'
 import Home from '../pages/Home'
 import MainLayout from '../layouts/MainLayout'
 import Favorites from '../pages/Favorites'
 import About from '../pages/About'
 import PhoneDetails from '../pages/PhoneDetails'
 import Error from '../pages/Error'
 
 const router = createBrowserRouter([
   {
     path: '/',
     Component: MainLayout,
     errorElement: <Error />,
     children: [
       {
         path: '/',
         element: <Home />,
        //  hydrateFallbackElement: <p>Loading, please wait....</p>,
          loader: () => fetch('../phones.json'),
       },
       {
         path: '/favorites',
         Component:Favorites,
       },
       {
         path: '/about',
         element: <About />,
       },
       {
         path: '/phone-details/:id',
         element: <PhoneDetails />,
        //  hydrateFallbackElement: <p>Loading, please wait....</p>,
        //  loader: () => fetch('../phones.json'),
       },
     ],
   },
 ])
 export default router