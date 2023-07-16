import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import TableRow from "./TableRow/TableRow";
import {TableData} from "../../redux/table-reducer";
import styles from "./Table.module.css";

const Table = (props: object) => {
    let tableData = useAppSelector(state => state.table.data);
    let filter = useAppSelector(state => state.table.filter);
    let dispatch = useAppDispatch();

    let tableItems = tableData.map((el: TableData) => <TableRow key={el.id} {...el} />);

    if (filter !== "all") {
        tableItems = tableData.filter(el => el.type === filter).map((el: TableData) => <TableRow
            key={el.id} {...el} />);
    }

    return (
        <section className={"section " + styles.sectionTable}>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>№</th>
                    <th>Тип</th>
                    <th>Организация</th>
                    <th>Содержание</th>
                    <th>Дата получения/отправления</th>
                    <th>Передано</th>
                    {filter === "all" || filter === "incoming" ? <th>Кто передал</th> : null}
                    {filter === "all" || filter === "incoming" ? <th>Дата передачи</th> : null}
                    {filter === "all" || filter === "outgoing" ? <th>Заказное/простое</th> : null}
                    {filter === "all" || filter === "outgoing" ? <th>Конверт</th> : null}
                    {filter === "all" || filter === "outgoing" ? <th>Адрес</th> : null}
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {tableItems}
                </tbody>
            </table>
        </section>
    )
}

export default Table;