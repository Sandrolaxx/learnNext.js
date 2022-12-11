import useAppContext from "../data/hook/useAppContext";
import { LayoutProps } from "../utils/types";
import Content from "./Content";
import Header from "./Header";
import LateralMenu from "./LateralMenu";
import Middleware from "./Middleware";

export default function Layout(props: LayoutProps) {
    const { theme } = useAppContext();

    return (
        <Middleware>
            <div className={`${theme} flex w-screen h-screen`}>
                <LateralMenu />
                <div className="flex flex-col w-full p-7 bg-gray-300 dark:bg-black">
                    <Header title={props.title} subTitle={props.subTitle} />
                    <Content>
                        {props.children}
                    </Content>
                </div>
            </div>
        </Middleware>
    )
}