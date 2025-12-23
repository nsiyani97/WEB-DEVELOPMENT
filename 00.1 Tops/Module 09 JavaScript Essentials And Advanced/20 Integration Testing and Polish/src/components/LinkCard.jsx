function LinkCard({ link, deleteLink }) {
  return (
    <div>
      <a href={link.url} target="_blank">
        {link.title}
      </a>
      <button onClick={() => deleteLink(link.id)}>❌</button>
    </div>
  );
}

export default LinkCard;
