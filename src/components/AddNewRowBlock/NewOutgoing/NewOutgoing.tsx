import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {
    addNewRow, changeIsChoiceType, changeNewRowType, clearNewRowState,
    setNewRowId,
    setNewRowType, updateNewRowAddress,
    updateNewRowContent, updateNewRowDate, updateNewRowDeliveryType, updateNewRowEnvelope,
    updateNewRowOrganization, updateNewRowTransferred,
} from "../../../redux/table-reducer";

const NewOutgoing = (props: object) => {
    let dispatch = useAppDispatch();
    let tableDataState = useAppSelector(state => state.table.data);
    let newRowState = useAppSelector(state => state.table.newRow);

    useEffect(() => {
        dispatch(setNewRowId(tableDataState.length + 1));
        dispatch(setNewRowType("outgoing"));
    }, [tableDataState.length]);

    const onOrganizationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateNewRowOrganization(e.currentTarget.value));
    }
    const onTransferredChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateNewRowTransferred(e.currentTarget.value));
    }
    const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewRowContent(e.currentTarget.value));
    }
    const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateNewRowDate(e.currentTarget.value));
    }
    const onDeliveryTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateNewRowDeliveryType(e.currentTarget.value));
    }
    const onEnvelopeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateNewRowEnvelope(e.currentTarget.value));
    }
    const onAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateNewRowAddress(e.currentTarget.value));
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
                    <label className="formLabel">Дата отправления*</label>
                    <input className="formInput" type="date" value={newRowState.date} onChange={onDateChange}/>
                </div>
                <div className="formShortBlock">
                    <label className="formLabel">Заказное/простое</label>
                    <input className="formInput" value={newRowState.deliveryType} onChange={onDeliveryTypeChange} type="text" placeholder="Заказное/простое"/>
                </div>
            </div>
            <div className="formLongBlock formGroup">
                <div className="formShortBlock">
                    <label className="formLabel">Передано*</label>
                    <input className="formInput" value={newRowState.transferred} onChange={onTransferredChange} type="text" placeholder="Фамилия получившего"/>
                </div>
                <div className="formShortBlock">
                    <label className="formLabel">Конверт</label>
                    <input className="formInput" type="text" value={newRowState.envelope} onChange={onEnvelopeChange} placeholder="Формат конверта"/>
                </div>
            </div>
            <div className="formLongBlock">
                <label className="formLabel">Адрес</label>
                <input className="formInput" type="text" value={newRowState.address} onChange={onAddressChange} placeholder="Почтовый индекс и адрес"/>
            </div>
            <input className="formSubmit" type="submit" value="Добавить" disabled={newRowState.organization.length < 3 || newRowState.content.length < 3 || newRowState.date.length < 10 || newRowState.transferred.length < 2}/>
            <p>* — обязательные для заполнения поля</p>
        </form>
    )
}

export default NewOutgoing;