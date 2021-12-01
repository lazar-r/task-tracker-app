import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="flex justify-around flex-wrap mb-8">
      <h1 className="py-1 text-4xl font-bold">{title}</h1>
      <Button onAdd={onAdd} text={showAdd ? "Close" : "Add"} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
