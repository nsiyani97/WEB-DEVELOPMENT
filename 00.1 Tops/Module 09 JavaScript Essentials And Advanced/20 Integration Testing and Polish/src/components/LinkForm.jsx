import { useState } from "react";

function LinkForm({ addLink }) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const submit = () => {
    if (!title || !url) return;

    addLink({
      id: Date.now(),
      title,
      url,
    });

    setTitle("");
    setUrl("");
  };

  return (
    <>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <input value={url} onChange={(e) => setUrl(e.target.value)} />
      <button onClick={submit}>Add</button>
    </>
  );
}

export default LinkForm;
