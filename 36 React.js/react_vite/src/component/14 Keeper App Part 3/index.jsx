import React, { useState } from "react";

function Header() {
    return (
        <header>
            <h1>Keeper</h1>
        </header>
    );
}

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright ⓒ {year}</p>
        </footer>
    );
}

function Note(props) {
    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>DELETE</button>
        </div>
    );
}

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title"
                />
                <textarea
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows="3"
                />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

function KeeperAppPart3() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes((prevNotes) => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        setNotes((prevNotes) => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((noteItem, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default KeeperAppPart3;
