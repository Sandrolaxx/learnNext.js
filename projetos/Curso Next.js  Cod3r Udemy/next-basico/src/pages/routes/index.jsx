import Link from "next/link";

export default function rotas() {
    return (
        <div className="default">
            Rotas index
            <ul>
                <li>
                    <Link href="/routes/params?name=Sandrolax&age=23" passHref>
                        Params
                    </Link>
                </li>
                <li>
                    <Link href="/" passHref>
                        Home
                    </Link>
                </li>
            </ul>
        </div>
    )
}