import Link from "next/link";

export default function rotas() {
    return (
        <div className="default">
            Rotas index
            <ul>
                <li>
                    <Link href="/routes/params?name=Sandrolax&age=23">
                        Params
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
            </ul>
        </div>
    )
}