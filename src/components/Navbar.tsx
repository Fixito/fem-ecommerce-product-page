import { links } from '../../data.json';

function Navbar() {
  return (
    <nav>
      <header>
        <button aria-label="Close menu">
          <img src="/images/icon-close.svg" alt="" />
        </button>
      </header>
      <ul>
        {links.map((link) => {
          const { id, href, title } = link;

          return (
            <li key={id}>
              <a href={href}>{title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
export default Navbar;
