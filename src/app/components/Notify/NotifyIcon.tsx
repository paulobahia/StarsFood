import Image, { StaticImageData } from "next/image"

interface NotifyIconProps {
    icon: StaticImageData,
}

const NotifyIcon = ({ icon: Icon }: NotifyIconProps) => {


    return (
        <div className="p-2 items-center justify-center rounded-full bg-toast-circle relative flex">
            <Image src={Icon} alt="IconToast" />
        </div>
    )
}

export default NotifyIcon