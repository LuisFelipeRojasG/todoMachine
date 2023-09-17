import { ReactComponent as Logo } from "../assets/logo.svg";
import '../styles/todoLogo.css';

function TodoLogo ({ width, height }) {
    return(
        <div className="logo">
            <Logo width={width} height={height}/>
        </div>
    );
}

export { TodoLogo };