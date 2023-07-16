
import styles from "./TableRow.module.css";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {changeIsEditMode, selectRowForEdit} from "../../../redux/table-reducer";

const TableRow = ({...el}) => {
    let filter = useAppSelector(state => state.table.filter);
    let dispatch = useAppDispatch();

    const onIsEditMode = () => {
        let selectRow = {
            id: el.id,
            type: el.type,
            organization: el.organization,
            content: el.content,
            date: el.date,
            transferred: el.transferred,
            address: el.address,
            deliveryType: el.deliveryType,
            envelope: el.envelope,
            whoPassed: el.whoPassed,
            datePassed: el.datePassed
        }
        dispatch(changeIsEditMode(true));
        dispatch(selectRowForEdit(selectRow));
    }
    const reformatDate = (date: string) => {
        return date.split('-').reverse().join('.');
    }
    return (
        <tr>
            <td>{el.id}</td>
            <td>{el.type === "incoming" ? "Вх" : "Исх"}</td>
            <td>{el.organization}</td>
            <td>{el.content}</td>
            <td>{el.date.includes('-') ? reformatDate(el.date) : el.date}</td>
            <td>{el.transferred}</td>
            {filter === "all" || filter === "incoming" ? <td>{el.whoPassed}</td> : null}
            {filter === "all" || filter === "incoming" ? <td>{el.datePassed && el.datePassed.includes('-') ? reformatDate(el.datePassed) : el.datePassed}</td> : null}
            {filter === "all" || filter === "outgoing" ? <td>{el.deliveryType}</td> : null}
            {filter === "all" || filter === "outgoing" ? <td>{el.envelope}</td> : null}
            {filter === "all" || filter === "outgoing" ? <td>{el.address}</td> : null}
            <td className={styles.editButton} onClick={onIsEditMode}>
                Редактировать
            </td>
        </tr>
    )
}

export default TableRow;