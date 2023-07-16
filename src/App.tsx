import React from 'react';
import './App.css';
import Table from "./components/Table/Table";
import AddNewRowBlock from "./components/AddNewRowBlock/AddNewRowBlock";
import Filter from "./components/Filter/Filter";
import {useAppDispatch, useAppSelector} from "./redux/hooks";
import EditRowPopup from "./components/EditRowPopup/EditRowPopup";
import {changeIsEditMode} from "./redux/table-reducer";

function App() {
    let isEditMode = useAppSelector(state => state.table.isEditMode);
    let dispatch = useAppDispatch();

    const closeEditMode = () => {
        dispatch(changeIsEditMode(false));
    }

    return (
        <main className={isEditMode ? "App AppOverlay" : "App"}>
            {isEditMode && <div className="overlay" onClick={closeEditMode}></div>}
            <h2 className="pageTitle">Список отправлений</h2>
            {isEditMode && <EditRowPopup/>}
            <AddNewRowBlock/>
            <Filter/>
            <Table/>
        </main>
    );
}

export default App;
