import React from "react";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {
    addNewRow, changeIsChoiceType, changeIsEditMode, changeNewRowType, clearNewRowState, setUpdateEditRow,
    updateEditRowContent, updateEditRowDate, updateEditRowDatePassed,
    updateEditRowOrganization, updateEditRowTransferred, updateEditRowWhoPassed,
} from "../../../redux/table-reducer";

const EditRowIncoming = (props: object) => {
    let editRowState = useAppSelector(state => state.table.editRow);
    let dispatch = useAppDispatch();

    const onOrganizationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateEditRowOrganization(e.currentTarget.value));
    }
    const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateEditRowContent(e.currentTarget.value));
    }
    const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateEditRowDate(e.currentTarget.value));
    }
    const onTransferredChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateEditRowTransferred(e.currentTarget.value));
    }
    const onWhoPassedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateEditRowWhoPassed(e.currentTarget.value));
    }
    const onDatePassedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateEditRowDatePassed(e.currentTarget.value));
    }

    const submitEditRow = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setUpdateEditRow(editRowState));
        dispatch(clearNewRowState());
        dispatch(changeIsEditMode(false));
    }

    return (
        <form className="addForm" onSubmit={submitEditRow}>
            <div className="formLongBlock">
                <label className="formLabel">Организация*</label>
                <input className="formInput" type="text" value={editRowState.organization}
                       onChange={onOrganizationChange}
                       placeholder="Наименование организации"/>
            </div>
            <div className="formLongBlock">
                <label className="formLabel">Содержание*</label>
                <textarea className="formTextarea" name="content" value={editRowState.content}
                          onChange={onContentChange} placeholder="Содержание"
                ></textarea>
            </div>
            <div className="formLongBlock formGroup">
                <div className="formShortBlock">
                    <label className="formLabel">Дата получения*</label>
                    <input className="formInput" type="date" value={editRowState.date} onChange={onDateChange}/>
                </div>
                <div className="formShortBlock">
                    <label className="formLabel">Кто передал</label>
                    <input className="formInput" type="text" value={editRowState.whoPassed} onChange={onWhoPassedChange}
                           placeholder="Почта/курьер"
                    />
                </div>
            </div>
            <div className="formLongBlock formGroup">
                <div className="formShortBlock">
                    <label className="formLabel">Передано*</label>
                    <input className="formInput" type="text" value={editRowState.transferred}
                           onChange={onTransferredChange}
                           placeholder="Фамилия получившего"/>
                </div>
                <div className="formShortBlock">
                    <label className="formLabel">Дата передачи</label>
                    <input className="formInput" type="date" value={editRowState.datePassed}
                           onChange={onDatePassedChange}
                    />
                </div>
            </div>
            <input className="formSubmit" type="submit" value="Сохранить"
                   disabled={editRowState.organization.length < 3 || editRowState.content.length < 3 || editRowState.date.length < 10 || editRowState.transferred.length < 2}/>
            <p>* — обязательные для заполнения поля</p>
        </form>
    )
}

export default EditRowIncoming;