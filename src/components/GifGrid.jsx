import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category)

    return (
        <>
            <h1 className="text-5xl font-semibold text-gray-800 mb-4 text-center">{category}</h1>
            {
                isLoading && <h2>Cargando...</h2>
            }
            
            <div className="w-full bg-white rounded-lg">
                
                <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((image) => (
                        <GifItem key={image.id} {...image} />
                    ))}
                </ol>
            </div>
            
        </>
    )
}