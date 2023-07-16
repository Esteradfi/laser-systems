import React from "react";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {addNewRow} from "../../../redux/table-reducer";

const NewOutgoing = (props: object) => {
    let dispatch = useAppDispatch();
    let newRowState = useAppSelector(state => state.table.newRow);

    const submitNewRow = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addNewRow(newRowState));

    }
    return (
        <form className="addForm" onSubmit={submitNewRow}>
            <div className="formLongBlock">
                <label className="formLabel">Организация*</label>
                <input className="formInput" type="text" placeholder="Наименование организации"/>
            </div>
            <div className="formLongBlock">
                <label className="formLabel">Содержание*</label>
                <textarea className="formTextarea" name="content" placeholder="Содержание"></textarea>
            </div>
            <div className="formLongBlock formGroup">
                <div className="formShortBlock">
                    <label className="formLabel">Дата отправления*</label>
                    <input className="formInput" type="date"/>
                </div>
                <div className="formShortBlock">
                    <label className="formLabel">Заказное/простое</label>
                    <input className="formInput" type="text" placeholder="Заказное/простое"/>
                </div>
            </div>
            <div className="formLongBlock formGroup">
                <div className="formShortBlock">
                    <label className="formLabel">Передано*</label>
                    <input className="formInput" type="text" placeholder="Фамилия получившего"/>
                </div>
                <div className="formShortBlock">
                    <label className="formLabel">Конверт</label>
                    <input className="formInput" type="text" placeholder="Формат конверта"/>
                </div>
            </div>
            <div className="formLongBlock">
                <label className="formLabel">Адрес*</label>
                <input className="formInput" type="text" placeholder="Почтовый индекс и адрес"/>
            </div>
            <input className="formSubmit" type="submit" value="Добавить"/>
            <p>* — обязательные для заполнения поля</p>
        </form>
    )
}

export default NewOutgoing;