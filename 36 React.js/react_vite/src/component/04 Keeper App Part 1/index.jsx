import React from "react";

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

function Note() {
    return (
        <div className="note">
            <h1>This is the note title</h1>
            <p>This is the note content</p>
        </div>
    );
}

function KeeperAppPart1() {
    return (
        <div>
            <Header />
            <Note />
            <Footer />
        </div>
    );
}

export default KeeperAppPart1;
