import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {
    addNewRow, changeIsChoiceType, changeNewRowType,
    clearNewRowState, setNewRowId, setNewRowType,
    updateNewRowContent,
    updateNewRowDate, updateNewRowDatePassed,
    updateNewRowOrganization, updateNewRowTransferred, updateNewRowWhoPassed
} from "../../../redux/table-reducer";
import React, {useEffect} from "react";

const NewIncoming = (props: object) => {
    let newRowState = useAppSelector(state => state.table.newRow);
    let tableDataState = useAppSelector(state => state.table.data);
    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setNewRowId(tableDataState.length + 1));
        dispatch(setNewRowType("incoming"));
    }, [tableDataState.length]);

    const onOrganizationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateNewRowOrganization(e.currentTarget.value));
    }
    const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewRowContent(e.currentTarget.value));
    }
    const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateNewRowDate(e.currentTarget.value));
    }
    const onTransferredChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateNewRowTransferred(e.currentTarget.value));
    }
    const onWhoPassedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateNewRowWhoPassed(e.currentTarget.value));
    }
    const onDatePassedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateNewRowDatePassed(e.currentTarget.value));
    }

    const submitNewRow = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addNewRow(newRowState));
        dispatch(clearNewRowState());
        dispatch(changeNewRowType(''));
        dispatch(changeIsChoiceType(false));
    }
    return (
        <form className="addForm" onSubmit={submitNewRow}>
            <div className="formLongBlock">
                <label className="formLabel">Организация*</label>
                <input className="formInput" type="text" value={newRowState.organization}
                       placeholder="Наименование организации" onChange={onOrganizationChange}/>
            </div>
            <div className="formLongBlock">
                <label className="formLabel">Содержание*</label>
                <textarea className="formTextarea" name="content" value={newRowState.content} placeholder="Содержание"
                          onChange={onContentChange}></textarea>
            </div>
            <div className="formLongBlock formGroup">
                <div className="formShortBlock">
                    <label className="formLabel">Дата получения*</label>
                    <input className="formInput" type="date" value={newRowState.date} onChange={onDateChange}/>
                </div>
                <div className="formShortBlock">
                    <label className="formLabel">Кто передал</label>
                    <input className="formInput" type="text" value={newRowState.whoPassed} placeholder="Почта/курьер"
                           onChange={onWhoPassedChange}/>
                </div>
            </div>
            <div className="formLongBlock formGroup">
                <div className="formShortBlock">
                    <label className="formLabel">Передано*</label>
                    <input className="formInput" type="text" value={newRowState.transferred}
                           placeholder="Фамилия получившего" onChange={onTransferredChange}/>
                </div>
                <div className="formShortBlock">
                    <label className="formLabel">Дата передачи</label>
                    <input className="formInput" type="date" value={newRowState.datePassed}
                           onChange={onDatePassedChange}/>
                </div>
            </div>
            <input className="formSubmit" type="submit" value="Добавить"
                   disabled={newRowState.organization.length < 3 || newRowState.content.length < 3 || newRowState.date.length < 10 || newRowState.transferred.length < 2}/>
            <p>* — обязательные для заполнения поля</p>
        </form>
    )
}

export default NewIncoming;