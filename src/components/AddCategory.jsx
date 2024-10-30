import { useState } from "react"

export const AddCategory = ({onNewValue}) => {


    const [inputValue, setInputValue ] = useState("")

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()

        if(inputValue.trim().length < 1 ) return;
        
        onNewValue(inputValue.trim())
        setInputValue("")
    }

    return (
        <form onSubmit={onSubmit} className="flex items-center justify-center w-full max-w-md mt-4">
            <input 
                type="text" 
                placeholder="Search gif" 
                value={inputValue}
                onChange={onInputChange}
                className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
            />
        </form>
    )
}