import { UploadCloud } from "lucide-react"
import { Dispatch, SetStateAction, useCallback, useRef, useState } from "react";

export type Imagens = {
    imagePath: string
}

interface DragInDropImageProps {
    productsImage: Imagens[],
    setProductsImage: Dispatch<SetStateAction<Imagens[]>>
}

const DragInDropImage = ({ productsImage, setProductsImage }: DragInDropImageProps) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    const openFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsHovered(false);

        const file = event.dataTransfer.files[0];

        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageDataURL = e.target?.result as string;

                if (productsImage.length === 3) {
                    const newSelectedImage = productsImage.slice(1);
                    setProductsImage([...newSelectedImage, { imagePath: imageDataURL }]);
                } else {
                    setProductsImage([...productsImage, { imagePath: imageDataURL }]);
                }
            };
            reader.readAsDataURL(file);
        }
    }, [productsImage]);

    const handleDragEnter = () => {
        setIsHovered(true);
    };

    const handleDragLeave = () => {
        setIsHovered(false);
    };

    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];

        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageDataURL = e.target?.result as string;

                if (productsImage.length === 3) {
                    const newSelectedImage = productsImage.slice(1);
                    setProductsImage([...newSelectedImage, { imagePath: imageDataURL }]);
                } else {
                    setProductsImage([...productsImage, { imagePath: imageDataURL }]);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="bg-backgrounds-secondary p-5 flex flex-col rounded-xl h-2/5">
            <div className="text-xl font-semibold">
                Imagens do Produto
            </div>
            <div
                onClick={openFileInput}
                className={`flex flex-1 mt-3 border-2 cursor-pointer border-primary-light rounded-sm h-full items-center justify-center ${isHovered ? "opacity-100 border-white" : "border-dashed opacity-50"}`}
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}>
                <div className="flex py-5 flex-col">
                    <div className="flex justify-center mb-2">
                        <UploadCloud className={`${isHovered ? "sm:w-20 sm:h-20" : "sm:w-16 sm:h-16"}  w-10 h-10`} />
                    </div>
                    <div className="flex">
                        <div className="text-sm font-medium flex">Escolha um arquivo</div>
                        &nbsp;
                        <div className="text-sm font-normal text-primary-light">{isHovered ? 'ou solte o arquivo' : 'ou arraste ele aqui'} </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="text-xs font-normal text-primary-light">Arquivos PNG, JPG e GIF são permitidos.</div>
                    </div>
                </div>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileInputChange}
                    ref={fileInputRef}
                    className="hidden"
                />
            </div>
        </div>
    )
}

export default DragInDropImage