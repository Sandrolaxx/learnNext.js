import { useRouter } from "next/router";

export default function Params() {
    const router = useRouter();

    return(
        <div className="default">
            Usuário {router.query.name} com idade {router.query.age}
        </div>
    )
}