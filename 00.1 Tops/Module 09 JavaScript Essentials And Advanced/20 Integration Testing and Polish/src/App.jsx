import { useState, useEffect } from "react";
import LinkForm from "./components/LinkForm";
import LinkList from "./components/LinkList";

function App() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("links")) || [];
    setLinks(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  const addLink = (link) => {
    setLinks([...links, link]);
  };

  const deleteLink = (id) => {
    setLinks(links.filter((l) => l.id !== id));
  };

  return (
    <>
      <LinkForm addLink={addLink} />
      <LinkList links={links} deleteLink={deleteLink} />
    </>
  );
}

export default App;
