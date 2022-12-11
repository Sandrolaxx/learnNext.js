import Lottie from "lottie-react";
import router from "next/router";
import LoadingAnimation from "../assets/loading.json";
import useAuthContext from "../data/hook/useAuthContext";

export default function Middleware(props: any) {
    const { isLoading, user } = useAuthContext();

    if (!isLoading && user?.email) {
        return (
            <>
                {props.children}
            </>
        );
    }

    if (isLoading) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <Lottie className="w-56 h-56" animationData={LoadingAnimation} />
            </div>
        )
    }

    router.push("/auth");

    return null;
}