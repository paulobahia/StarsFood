interface NotifyContextProps { showNotify: (title: string, message: string, type: string) => void }

interface RegisterProps {
    register:
    UseFormRegister<{
        email: string;
        name: string;
        password: string;
        birthDate: Date;
        restaurantCode: string;
        gender: string;
    }>
}