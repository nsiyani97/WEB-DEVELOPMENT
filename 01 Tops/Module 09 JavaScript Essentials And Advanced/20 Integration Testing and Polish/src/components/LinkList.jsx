import LinkCard from "./LinkCard";

function LinkList({ links, deleteLink }) {
  return links.map((link) => <LinkCard key={link.id} link={link} deleteLink={deleteLink} />);
}

export default LinkList;
