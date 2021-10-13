import React from "react";
import '../styles/App.css';
import Select from './select';
import Multiselect from './multiselect';

function App() {
    return(
        <div className='wrapper'>
            <Select />
            <Multiselect />
        </div>
    );
}

export default App;