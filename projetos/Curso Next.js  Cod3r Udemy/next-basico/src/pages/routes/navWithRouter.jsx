import { useRouter } from "next/router"

export default function NavWithRouter() {
    const router = useRouter();

    function simpleNav(url) {
        router.push(url);
    }

    function paramsNav() {
        router.push({
            pathname: "/routes/params",
            query: {
                age: 23,
                name: "Sandrolax"
            }
        });
    }

    return (
        <div className="default">
            Rotas index
            <hr />
            <button onClick={paramsNav} >
                Params
            </button>
            <hr />
            <button onClick={() => simpleNav("/")} >
                Home
            </button>
        </div>
    )
}