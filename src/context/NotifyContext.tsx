"use client"

import { createContext, useContext, useState } from "react";
import { Notify as Toast } from '@/app/components/Notify';
import ErrorIcon from '@/app/assets/ErrorIcon.png'
import SuccessIcon from '@/app/assets/SuccessIcon.png'
import WarningIcon from '@/app/assets/WarningIcon.png'

const NotifyContext = createContext<NotifyContextProps | undefined>(undefined);

const iconPaths = {
    'Error': ErrorIcon,
    'Success': SuccessIcon,
    'Warning': WarningIcon
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [notifyContent, setNotifyContent] = useState<{
        title: string;
        message: string;
        type: string;
    } | null>(null);

    const showNotify = (title: string, message: string, type: string) => {

        setNotifyContent({ title, message, type });

        setTimeout(() => {
            setNotifyContent(null);
        }, 7000);
    };

    const Icon = iconPaths[notifyContent?.type as keyof typeof iconPaths];

    return (
        <NotifyContext.Provider value={{ showNotify }}>
            {children}
            {notifyContent && <Toast.Root>
                <Toast.Icon icon={Icon} />
                <Toast.Content message={notifyContent.message} title={notifyContent.title} />
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