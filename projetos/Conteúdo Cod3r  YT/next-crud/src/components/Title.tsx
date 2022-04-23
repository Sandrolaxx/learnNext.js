export default function Title(props: any) {
    return(
        <div className={`
            flex flex-col justify-center text-2xl
        `}>
            <h1 className="px-7 py-2">
                {props.children}
            </h1>
            <hr className="border-2 border-purple-700" />    
        </div>
    );
}