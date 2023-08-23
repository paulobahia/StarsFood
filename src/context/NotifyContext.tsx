"use client"

import { createContext, useContext, useState } from "react";
import { Notify as Toast } from '@/app/components/Notify';
import ErrorIcon from '@/app/assets/ErrorIcon.png'
import SuccessIcon from '@/app/assets/SuccessIcon.png'
import WarningIcon from '@/app/assets/WarningIcon.png'
import { X } from "lucide-react";

const NotifyContext = createContext<NotifyContextProps | undefined>(undefined);

const iconPaths = {
    'Error': ErrorIcon,
    'Success': SuccessIcon,
    'Warning': WarningIcon
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [position, setPosition] = useState<string>('-translate-y-20');
    const [notifyContent, setNotifyContent] = useState<{
        title: string;
        message: string;
        type: string;
    } | null>(null);

    const Icon = iconPaths[notifyContent?.type as keyof typeof iconPaths];

    const showNotify = async (title: string, message: string, type: string) => {
        setNotifyContent({ title, message, type });

        setTimeout(() => {
            setPosition('translate-y-0 transition-transform ease-linear duration-500');
        }, 500);

        setTimeout(() => {
            closeToast()
        }, 6000);

        setTimeout(() => {
            setNotifyContent(null);
        }, 7000);
    };

    const closeToast = () => {
        setPosition('translate-x-96 transition-transform ease-linear duration-500')
    }

    return (
        <NotifyContext.Provider value={{ showNotify }}>
            {children}
            {notifyContent && <Toast.Root position={position}>
                <Toast.Icon icon={Icon} />
                <Toast.Content message={notifyContent.message} title={notifyContent.title} />
                <X onClick={closeToast} className='w-4 h-4 absolute top-2 right-2 cursor-pointer text-zinc-50 opacity-0 group-hover:opacity-100 transition-opacity ease-in delay-100' />
            </Toast.Root>}
        </NotifyContext.Provider>
    );
}

export function Notify() {
    const context = useContext(NotifyContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}