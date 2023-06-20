import SidebarListItem from "./SidebarListItem";

function SidebarList({ name, item }) {
  const render = item.map((icon, index) => {
    return <SidebarListItem key={index} icon={icon} />;
  });
  return (
    <>
      <div className="sidebarmenue">
        <div className="sidebartitle">{name}</div>

        <ul className="sidebarlist">{render}</ul>
      </div>
    </>
  );
}

export default SidebarList;
