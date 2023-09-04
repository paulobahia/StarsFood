import { ImageOff, X } from "lucide-react"
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Imagens } from "./drag-in-drop";

interface ImageProductsProps {
    productsImage: Imagens[]
    onRemove: (index: number) => void
}

const ImageProducts = ({ productsImage, onRemove }: ImageProductsProps) => {
    const [selectedImage, setSelectedImage] = useState<string>('')

    const handleRemove = async (index: number) => {
        await onRemove(index)
        setSelectedImage('')
    }

    return (
        <div className="bg-backgrounds-secondary p-5 gap-x-2 rounded-xl flex h-full items-center justify-start">
            <div className="h-full w-[70%] bg-backgrounds-primary flex flex-col justify-center items-center rounded-lg">
                {selectedImage === ''
                    ?
                    <ImageOff className="w-20 h-20 sm:w-40 sm:h-40 text-white" />
                    :
                    <div className="w-full h-[568px]">
                        <img className="w-full h-full rounded-lg" src={selectedImage} alt="imagePath" />
                    </div>
                }
            </div>
            <div className="flex flex-col gap-y-2 w-[30%] h-full">
                {productsImage.map(({ imagePath }, index: number) => {
                    return (
                        <div key={index} className="w-full h-full relative flex justify-between bg-backgrounds-primary rounded-lg items-center">
                            {imagePath == ''
                                ?
                                <div onClick={() => setSelectedImage(imagePath)} className={`w-full py-3 h-full flex justify-center items-center  ${selectedImage != imagePath && 'opacity-50 cursor-pointer'}`}>
                                    <ImageOff className="w-10 h-10 sm:w-20 sm:h-20 text-white" />
                                </div>
                                :
                                <div onClick={() => setSelectedImage(imagePath)} className={`w-full h-[185px] justify-center items-center flex ${selectedImage != imagePath && 'opacity-50 cursor-pointer'}`} >
                                    {selectedImage == imagePath &&
                                        <div onClick={() => handleRemove(index)} className="absolute cursor-pointer top-2 right-2">
                                            <X className="w-6 h-6 text-white" />
                                        </div>
                                    }
                                    <img className="w-full h-full rounded-lg" src={imagePath} alt="imagePath" />
                                </div>
                            }
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default ImageProducts