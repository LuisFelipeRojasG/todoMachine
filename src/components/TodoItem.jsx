import '../styles/todoItem.css'
import { TodoDelete } from "./TodoDelete";

function TodoItem ({text, completed, description, onComplete, onDelete}) {

    return (
        <div className="todoItem">
            <div>
                <button className={`todoItem__button ${completed && "todoItem__button--check"}`} typeof="checked" onClick={onComplete}></button>
            </div>
            <div className="todoItem--text">
                <p className={`todoItem--title`}>
                    {text}
                </p>
                <p className={`todoItem--description`}>
                    {description}
                </p>
            </div>
            <div  onClick={onDelete}>
                <TodoDelete height={20} width={20}/>
            </div>
        </div>
    );
}

export { TodoItem };