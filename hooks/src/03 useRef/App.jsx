import React, { useState, useRef } from "react";
/*
Demo: Multiple Inputs with Auto-Focus
*/

function OTPForm() {
  const [otp, setOtp] = useState(["", "", "", ""]); // 4-digit OTP
  const inputRefs = useRef([]); // Array of refs for each input

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/^\d?$/.test(value)) {
      // Allow only 0-9, max 1 digit
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Focus next input if available
      if (value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Entered OTP: ${otp.join("")}`);
    setOtp(["", "", "", ""]); // Clear inputs
    inputRefs.current[0].focus(); // Focus first input
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>OTP Form with Auto-Focus</h1>
      <form onSubmit={handleSubmit}>
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            ref={(el) => (inputRefs.current[index] = el)} // Assign ref
            style={{
              width: "40px",
              padding: "5px",
              marginRight: "10px",
              textAlign: "center",
              fontSize: "18px",
            }}
            maxLength={1}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default OTPForm;

/*
Explanation

State Management (otp):

otp is an array storing each input’s value.

Controlled form ensures React state stays in sync.

Refs for Multiple Inputs (inputRefs):

inputRefs.current[index] points to the DOM element for each input.

This allows you to programmatically focus the next input.

Auto-Focus Logic:

When a user types a digit, handleChange updates the state and moves focus to the next input.

After submitting, focus resets to the first input.

Input Validation:

Only digits allowed with ^\d?$.

maxLength=1 ensures only one character per input.

✅ Key Takeaways

useRef can manage multiple DOM elements efficiently.

Controlled inputs ensure React state is always up-to-date.

Combining refs with controlled inputs enables smooth UX, e.g., auto-focusing OTP inputs.

This pattern is common for login, OTP verification, and multi-step forms.
*/
