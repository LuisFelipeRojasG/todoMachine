import '../styles/todoHeader.css';

function TodoHeader ({ fondo }) {
    return(
        <div className={`TodoHeader-${fondo}`}>
            <h1>ADD TASK</h1>
        </div>
    );
}

export { TodoHeader };