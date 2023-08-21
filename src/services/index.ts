import server from "@/api/axios";

export const authUser = (payload: any) => {
    return server.post('auth/login', payload)
}