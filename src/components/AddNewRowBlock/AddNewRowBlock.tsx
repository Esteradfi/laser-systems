import styles from "./AddNewRowBlock.module.css";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {changeIsChoiceType, changeNewRowType, clearNewRowState} from "../../redux/table-reducer";
import React from "react";
import NewIncoming from "./NewIncoming/NewIncoming";
import NewOutgoing from "./NewOutgoing/NewOutgoing";

const AddNewRowBlock = (props: object) => {
    let tableState = useAppSelector(state => state.table);
    let dispatch = useAppDispatch();

    const onChoiceRowType = (e: React.MouseEvent<HTMLButtonElement>) => {
        let value = +e.currentTarget.value;
        dispatch(changeIsChoiceType(Boolean(value)));
    }

    const onNewRowType = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(clearNewRowState());
        dispatch(changeNewRowType(e.currentTarget.value));
    }

    return (
        <section className="section">
            <h3 className={styles.title}>
                Добавить новые данные
            </h3>
            {tableState.newRowType ? <div className={styles.addRowBlock}>
                <header className={styles.header}>
                    <div className={styles.emptyBlock}></div>
                    <h3 className={styles.title + " " + styles.formTitle}>
                        Заполните поля
                    </h3>
                    <button className={styles.closeButton} value="" onClick={onNewRowType}>
                        <svg className={styles.closeSvg} width="40px" height="40px" viewBox="0 0 24 24" fill="#000000"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                                  fill="#000000"/>
                        </svg>
                    </button>
                </header>
                {tableState.newRowType === "incoming" ? <NewIncoming/> : <NewOutgoing/>}
            </div> : tableState.isChoiceType ? <div className={styles.buttonsBlock}>
                <div className={styles.buttonsGroup}>
                    <button className={styles.button} value="incoming" onClick={onNewRowType}>Входящий</button>
                    <button className={styles.button} value="outgoing" onClick={onNewRowType}>Исходящий</button>
                </div>
                <button className={styles.button} value={0} onClick={onChoiceRowType}>
                    Отмена
                </button>
            </div> : <button className={styles.button} value={1} onClick={onChoiceRowType}>
                Добавить
            </button>}

        </section>
    )
}

export default AddNewRowBlock;