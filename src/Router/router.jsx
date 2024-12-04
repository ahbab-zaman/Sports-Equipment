import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Layout/Home/Home";
import AllEquipment from "../Layout/AllEquipment/AllEquipment";
import AddEquipment from "../Layout/AddEquipment/AddEquipment";
import MyList from "../Layout/MyList/MyList";
import Login from "../Layout/Login/Login";
import Register from "../Layout/Register/Register";
import ViewAllProducts from "../Pages/ViewAllProducts/ViewAllProducts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/allEquipment",
                element:<AllEquipment></AllEquipment>
            },
            {
                path:"/addEquipment",
                element:<AddEquipment></AddEquipment>
            },
            {
                path:"/myLIst",
                element:<MyList></MyList>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/viewAll",
                element:<ViewAllProducts></ViewAllProducts>
            }
        ]
    }
])


export default router;