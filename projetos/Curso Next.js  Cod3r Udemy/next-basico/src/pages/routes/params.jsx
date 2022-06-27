import { useRouter } from "next/router";

export default function params() {
    const router = useRouter();

    return(
        <div className="default">
            Usuário {router.query.name} com idade {router.query.age}
        </div>
    )
}