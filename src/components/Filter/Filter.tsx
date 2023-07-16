import styles from "./Filter.module.css";
import React from "react";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {changeFilter} from "../../redux/table-reducer";

const Filter = (props: object) => {
    let dispatch = useAppDispatch();
    let filter = useAppSelector(state => state.table.filter);

    const changeFilterSettings = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeFilter(e.currentTarget.value));
    }

    return (
        <section>
            <h3 className={styles.title}>
                Фильтр по типу отправления
            </h3>
            <div className={"inputsRadioGroup"}>
                <label htmlFor="all" className="custom-radio">
                    <input name="filter" id="all" checked={filter === "all"}
                           value="all" onChange={changeFilterSettings}
                           type="radio"
                    />
                    <span className="custom-radio-span"></span>
                    <span className={styles.filterSpan}>Все</span>
                </label>
                <label htmlFor="incoming" className="custom-radio">
                    <input name="filter" id="incoming" checked={filter === "incoming"}
                           value="incoming" onChange={changeFilterSettings}
                           type="radio"
                    />
                    <span className="custom-radio-span"></span>
                    <span className={styles.filterSpan}>Только входящие</span>
                </label>
                <label htmlFor="outgoing" className="custom-radio">
                    <input name="filter" id="outgoing" checked={filter === "outgoing"}
                           value="outgoing" onChange={changeFilterSettings}
                           type="radio"
                    />
                    <span className="custom-radio-span"></span>
                    <span className={styles.filterSpan}>Только исходящие</span>
                </label>
            </div>
        </section>
    )
}

export default Filter;