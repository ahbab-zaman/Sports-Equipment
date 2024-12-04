import { useEffect } from "react";

const Title = (title) => {
    return (
        useEffect(()=>{
            document.title = `Sports Gear | ${title}`
        },[])
    );
};

export default Title;