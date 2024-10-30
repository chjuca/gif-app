export const GifItem = ({title, url}) => {
    return (
    <>
        <li className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-xs mx-auto">
            <img 
                src={url} 
                alt={title} 
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
            </div>
        </li>
    </>
    )
}