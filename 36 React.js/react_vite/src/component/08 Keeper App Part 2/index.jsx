import React from "react";

const notes = [
    {
        key: 1,
        title: "Delegation",
        content:
            "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"
    },
    {
        key: 2,
        title: "Loops",
        content:
            "How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat."
    },
    {
        key: 3,
        title: "Arrays",
        content:
            "Q. Why did the programmer quit his job? A. Because he didn't get arrays."
    },
    {
        key: 4,
        title: "Hardware vs. Software",
        content:
            "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
    }
];

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
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}

function KeeperAppPart2() {
    return (
        <div>
            <Header />
            {notes.map((noteItem) => (
                <Note
                    key={noteItem.key}
                    title={noteItem.title}
                    content={noteItem.content}
                />
            ))}
            <Footer />
        </div>
    );
}

export default KeeperAppPart2;
