import { ReactComponent as Logo } from "../assets/logo.svg";

function TodoLogo ({ width, height }) {
    return(
        <>
            <Logo width={width} height={height}/>
        </>
    );
}

export { TodoLogo };