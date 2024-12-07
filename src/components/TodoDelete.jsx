import { ReactComponent as Delete } from "../assets/iconX.svg";
import '../styles/todoDelete.css';

function TodoDelete ({ width, height }) {

    return(
        <div className="delete__icon">
            <Delete className="icon__svg" width={width} height={height}/>
        </div>
    );
}

export { TodoDelete };