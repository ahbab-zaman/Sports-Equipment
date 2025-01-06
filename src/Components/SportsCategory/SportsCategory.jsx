import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

const SportsCategory = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('./sportsCategory.json')
        .then(res => res.json())
        .then(data => {
            setCategories(data)
        })
    }, [])
    return (
        <div className="w-11/12 mx-auto py-8">
            <div className="text-center space-y-2">
            <h2 className="text-4xl font-semibold">Explore Our Category</h2>
            <p className="w-1/2 mx-auto">These are the latest category in our shop. You can buy or order any of these products as you like.</p>
           </div>

           <div className="grid lg:grid-cols-4 grid-cols-1 justify-items-center gap-4 py-6">
            {
                categories.map(category => <CategoryCard key={category.id} category={category}></CategoryCard>)
            }
           </div>
        </div>
    );
};

export default SportsCategory;