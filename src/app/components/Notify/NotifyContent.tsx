interface NotifyContentProps {
    title: string,
    message: string
}

const NotifyContent = ({ title, message }: NotifyContentProps) => {


    return (
        <div className='flex-col '>
            <p className='font-normal text-sm'>{title}</p>
            <p className='font-normal text-xs'>{message}</p>
        </div>
    )
}

export default NotifyContent