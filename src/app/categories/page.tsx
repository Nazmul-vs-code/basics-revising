'use client'

import { useMemo, useState } from "react";

const Allcategories = new Array(30_000_000).fill(0).map((_, i) => { 

    return {
        item: i,
        magicItem: i === 29_000_000
    }
})

const CategoriesPage = () => {

    const [catCount, setCatCount] = useState(0)
    const [categories, setCategories] = useState(Allcategories) 

    // const importatnCategory = categories.find(cat => cat.magicItem == true) // ---> This line will load this page very much slowly

    const importatnCategory = useMemo(()=>categories.find(cat => cat.magicItem == true), [categories])
    


    return (
        <div>
            Categories page

            <h2>We are gonna implement the useMemo here </h2>
            <div className="p-5">
                Important category : {importatnCategory?.item}
            </div>
            <h1>Total <span className="text-red-600">categories : </span>{catCount}</h1>
            <button
            className="btn btn-primary"
            onClick={() => setCatCount(catCount + 1)}
            >Increase categories</button>
        </div>
    );
};

export default CategoriesPage;