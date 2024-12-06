import { useLoaderData } from "react-router-dom";
import Title from "../../Components/Title/Title";

const MyList = () => {
    Title("My Equipment List")
    const myData = useLoaderData()
    console.log(myData)
    return (
        <div>
            My Equipment list
        </div>
    );
};

export default MyList;