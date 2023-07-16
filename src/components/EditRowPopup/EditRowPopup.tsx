import styles from "./EditRowPopup.module.css";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {changeIsEditMode} from "../../redux/table-reducer";
import EditRowIncoming from "./EditRowIncoming/EditRowIncoming";
import EditRowOutgoing from "./EditRowOutgoing/EditRowOutgoing";
const EditRowPopup = (props: object) => {
    let dispatch = useAppDispatch();
    let editRowState = useAppSelector(state => state.table.editRow);
    const closeEditMode = () => {
        dispatch(changeIsEditMode(false));
    }

    return (
        <div className={"" + styles.editRowPopup}>
            <header className={styles.header}>
                <div className={styles.emptyBlock}></div>
                <h3>Изменение данных</h3>
                <button className={styles.closeButton} onClick={closeEditMode}>
                    <svg className={styles.closeSvg} width="40px" height="40px" viewBox="0 0 24 24" fill="#000000"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                              fill="#000000"/>
                    </svg>
                </button>
            </header>
            {editRowState.type === "incoming" ? <EditRowIncoming/> : editRowState.type === "outgoing" ? <EditRowOutgoing/> : <p className={styles.editError}>Ошибка!</p>}
        </div>
    )
}

export default EditRowPopup;