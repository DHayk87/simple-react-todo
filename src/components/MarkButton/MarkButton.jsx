import  css  from "./MarkButton.module.css";

function MarkButton({ markAll }) {
    return (
        <button className={css["mark-all"]} onClick={markAll}>
            Mark All Task
        </button>
    );
}

export default MarkButton;
