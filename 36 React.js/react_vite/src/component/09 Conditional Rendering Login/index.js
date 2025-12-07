import React from "react";

var userIsRegistered = true;

function Input(props) {
    return <input type={props.type} placeholder={props.placeholder} />;
}

function Form(props) {
    return (
        <form className="form">
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            {!props.isRegistered && (
                <Input type="password" placeholder="Confirm Password" />
            )}
            <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
        </form>
    );
}

function ConditionalRenderingTernary() {
    const currentTime = new Date().getHours();
    return (
        <div className="container">
            <Form isRegistered={userIsRegistered} />
            {currentTime > 12 && <h1>Why are you still working?</h1>}
        </div>
    );
}

export default ConditionalRenderingTernary;
