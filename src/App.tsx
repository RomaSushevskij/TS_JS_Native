import React from 'react';
import './App.css';
import {LocalStorageExample} from "./14_Promises/LocalStorage";
import {FindUsersInDB} from "./14_Promises/FindUsersInDB";
import {Axios} from "./14_Promises/Axios";


function App() {
    return (
        <div className="App">
            {/*<LocalStorageExample/>*/}
            {/*<Wait/>*/}
            {/*<FindUsersInDB/>*/}
            <Axios/>
        </div>
    );
}

export default App;
