import { useSession } from "next-auth/react";
export default function useCurrent() {
    const session = useSession()
    return session.data?.user
}