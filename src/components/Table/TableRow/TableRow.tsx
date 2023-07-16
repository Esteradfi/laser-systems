
import styles from "./TableRow.module.css";
import {useAppSelector} from "../../../redux/hooks";

const TableRow = ({...el}) => {
    let filter = useAppSelector(state => state.table.filter);
    return (
        <tr>
            <td>{el.id}</td>
            <td>{el.type === "incoming" ? "Вх" : "Исх"}</td>
            <td>{el.organization}</td>
            <td>{el.content}</td>
            <td>{el.date}</td>
            <td>{el.transferred}</td>
            {filter === "all" || filter === "incoming" ? <td>{el.whoPassed}</td> : null}
            {filter === "all" || filter === "incoming" ? <td>{el.datePassed}</td> : null}
            {filter === "all" || filter === "outgoing" ? <td>{el.deliveryType}</td> : null}
            {filter === "all" || filter === "outgoing" ? <td>{el.envelope}</td> : null}
            {filter === "all" || filter === "outgoing" ? <td>{el.address}</td> : null}
            <td className={styles.editButton}>
                Редактировать
            </td>
        </tr>
    )
}

export default TableRow;