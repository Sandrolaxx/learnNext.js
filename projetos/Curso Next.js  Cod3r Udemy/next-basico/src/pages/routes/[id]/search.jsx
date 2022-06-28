import { useRouter } from "next/router";

export default function Search() {
    const router = useRouter();

    return(
        <div className="default">
            Id do usuário consultado foi: {router.query.id}
        </div>
    )
}