import { Separator } from "@/app/components/ui/separator";
import ProfileForm from "./profile-form";

export default function Settings() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Perfil</h3>
                <p className="text-sm text-muted-foreground">
                    É assim que outras pessoas verão seu perfil.
                </p>
            </div>
            <Separator />
            <ProfileForm />
        </div>
    )
}