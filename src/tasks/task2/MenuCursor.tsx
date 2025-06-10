import './style.css'

export const MenuCursor = () => {
  return (
    <nav className="nav">
      <button className="hamburger" id="menuBtn">
        Menu
      </button>
      <ul className="menu" id="menu">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
