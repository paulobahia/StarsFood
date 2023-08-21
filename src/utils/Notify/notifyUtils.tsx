import ReactDOM from 'react-dom';
import { Notify as Toast } from '@/app/components/Notify';
import ErrorIcon from '@/app/assets/ErrorIcon.png'
import SuccessIcon from '@/app/assets/SuccessIcon.png'
import WarningIcon from '@/app/assets/WarningIcon.png'

const iconPaths = {
    'Error': ErrorIcon,
    'Success': SuccessIcon,
    'Warning': WarningIcon
};

const Notify = ({ title, message, type }: NotifyProps) => {

    const toastContainer = document.getElementById('Notify');
    const Icon = iconPaths[type as keyof typeof iconPaths];
    if (toastContainer) {
        ReactDOM.render(
            <Toast.Root>
                <Toast.Icon icon={Icon} />
                <Toast.Content message={message} title={title} />
            </Toast.Root>
            , toastContainer);
    }
};

export default Notify;
