import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {addNewRow} from "../../../redux/table-reducer";
import React from "react";

const NewIncoming = (props: object) => {
    let newRowState = useAppSelector(state => state.table.newRow);
    let dispatch = useAppDispatch();

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
                    <label className="formLabel">Дата получения*</label>
                    <input className="formInput" type="date"/>
                </div>
                <div className="formShortBlock">
                    <label className="formLabel">Кто передал</label>
                    <input className="formInput" type="text" placeholder="Почта/курьер"/>
                </div>
            </div>
            <div className="formLongBlock formGroup">
                <div className="formShortBlock">
                    <label className="formLabel">Передано*</label>
                    <input className="formInput" type="text" placeholder="Фамилия получившего"/>
                </div>
                <div className="formShortBlock">
                    <label className="formLabel">Дата передачи</label>
                    <input className="formInput" type="date"/>
                </div>
            </div>
            <input className="formSubmit" type="submit" value="Добавить"/>
            <p>* — обязательные для заполнения поля</p>
        </form>
    )
}

export default NewIncoming;