import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Layout/Home/Home";
import AllEquipment from "../Layout/AllEquipment/AllEquipment";
import AddEquipment from "../Layout/AddEquipment/AddEquipment";
import MyList from "../Layout/MyList/MyList";
import Login from "../Layout/Login/Login";
import Register from "../Layout/Register/Register";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import ErrorPage from "../Layout/ErrorPage/ErrorPage";
import PrivateRoute from "../Layout/PrivateRoute/PrivateRoute";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import Practice from "../Practice";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allEquipment",
        element: <AllEquipment></AllEquipment>,
        loader: () =>
          fetch("https://equi-sports-server-side-two.vercel.app/allProducts"),
      },
      {
        path: "/addEquipment",
        element: (
          <PrivateRoute>
            <AddEquipment></AddEquipment>
          </PrivateRoute>
        ),
      },
      {
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/viewAll/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://equi-sports-server-side-two.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/updateProduct/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://equi-sports-server-side-two.vercel.app/allProducts/${params.id}`
          ),
      },
    ],
  },
  {
    path:"/practice",
    element:<Practice></Practice>
  }
]);

export default router;
