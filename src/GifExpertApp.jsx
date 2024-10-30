import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {
        setCategories([newCategory,...categories])
    }


    return (
    <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">GifExpertApp</h1>

        <div className="w-full max-w-md">
            <AddCategory onNewValue={onAddCategory} />
        </div>

        <div className="w-full max-w-7xl mt-10 space-y-10">
            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </div>
    </div>
    )
}