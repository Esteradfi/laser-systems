import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import React from "react";
import {
    changeIsEditMode,
    clearNewRowState,
    setUpdateEditRow, updateEditRowAddress,
    updateEditRowContent,
    updateEditRowDate, updateEditRowDatePassed, updateEditRowDeliveryType, updateEditRowEnvelope,
    updateEditRowOrganization,
    updateEditRowTransferred, updateEditRowWhoPassed
} from "../../../redux/table-reducer";

const EditRowOutgoing = (props: object) => {
    let editRowState = useAppSelector(state => state.table.editRow);
    let dispatch = useAppDispatch();

    const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateEditRowContent(e.currentTarget.value));
    }
    const onOrganizationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateEditRowOrganization(e.currentTarget.value));
    }
    const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateEditRowDate(e.currentTarget.value));
    }
    const onTransferredChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateEditRowTransferred(e.currentTarget.value));
    }
    const onEnvelopeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateEditRowEnvelope(e.currentTarget.value));
    }
    const onDeliveryTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateEditRowDeliveryType(e.currentTarget.value));
    }

    const onAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateEditRowAddress(e.currentTarget.value));
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
                    <label className="formLabel">Дата отправления*</label>
                    <input className="formInput" type="date" value={editRowState.date} onChange={onDateChange}/>
                </div>
                <div className="formShortBlock">
                    <label className="formLabel">Заказное/простое</label>
                    <input className="formInput" value={editRowState.deliveryType} onChange={onDeliveryTypeChange}
                           type="text" placeholder="Заказное/простое"/>
                </div>
            </div>
            <div className="formLongBlock formGroup">
                <div className="formShortBlock">
                    <label className="formLabel">Передано*</label>
                    <input className="formInput" value={editRowState.transferred} onChange={onTransferredChange}
                           type="text" placeholder="Фамилия получившего"/>
                </div>
                <div className="formShortBlock">
                    <label className="formLabel">Конверт</label>
                    <input className="formInput" type="text" value={editRowState.envelope} onChange={onEnvelopeChange}
                           placeholder="Формат конверта"/>
                </div>
            </div>
            <div className="formLongBlock">
                <label className="formLabel">Адрес</label>
                <input className="formInput" type="text" value={editRowState.address} onChange={onAddressChange}
                       placeholder="Почтовый индекс и адрес"/>
            </div>
            <input className="formSubmit" type="submit" value="Сохранить"
                   disabled={editRowState.organization.length < 3 || editRowState.content.length < 3 || editRowState.date.length < 10 || editRowState.transferred.length < 2}/>
            <p>* — обязательные для заполнения поля</p>
        </form>
    )
}

export default EditRowOutgoing;