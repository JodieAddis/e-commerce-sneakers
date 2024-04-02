import List from "../../typographies/List";

const Component = () => {
  return (
    <div className="ml-8">
      <ul className="flex flex-row">
        <List content="collection" css="navbar_list" />
        <List content="men" css="navbar_list" />
        <List content="women" css="navbar_list" />
        <List content="about" css="navbar_list" />
        <List content="contact" css="navbar_list" />
      </ul>
    </div>
  );
};

export default Component;
