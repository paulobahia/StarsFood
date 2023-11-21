import PersonalInfoForm from "./components/PersonalInfoForm";

export default function PersonalInfo() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Dados Pessoais</h3>
                <p className="text-sm text-muted-foreground">
                    Atualize as informações da sua conta. Defina seu ou altere seus dados pessoais.
                </p>
            </div>
            <PersonalInfoForm />
        </div>
    )
}