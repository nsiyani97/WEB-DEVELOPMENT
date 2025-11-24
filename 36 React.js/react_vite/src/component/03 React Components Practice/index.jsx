import React from "react";

function Heading() {
    return <h1>My Favourite Foods</h1>;
}

function List() {
    return (
        <ul>
            <li>Bacon</li>
            <li>Jamon</li>
            <li>Noodles</li>
        </ul>
    );
}

function ComponentsPractice() {
    return (
        <div>
            <Heading />
            <List />
        </div>
    );
}

export default ComponentsPractice;
