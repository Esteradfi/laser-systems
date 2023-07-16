import React from 'react';
import './App.css';
import Table from "./components/Table/Table";
import AddNewRowBlock from "./components/AddNewRowBlock/AddNewRowBlock";
import Filter from "./components/Filter/Filter";

function App() {
    return (
        <main className="App">
            <h2 className="pageTitle">Список отправлений</h2>
            <AddNewRowBlock/>
            <Filter/>
            <Table/>
        </main>
    );
}

export default App;
