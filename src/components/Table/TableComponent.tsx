import React from 'react';
import "./styles.css";

const TableComponent = ({data}: any) => {  
    const dataArray = Object.entries(data);

    return (
        <ul className="list-container">
            {dataArray.map((el: any) => <li className="list-item" key={el[0]}>`${el[0]} : ${el[1]}`</li>)}
        </ul>
    )
};

export default TableComponent;

