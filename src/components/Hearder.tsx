import Navbar from './Navbar';

export default function Hearder() {
  return (
    <header>
      <div>
        <button aria-label="Toggle menu">
          <img src="/images/icon-menu.svg" alt="" />
        </button>
        <img src="/images/logo.svg" alt="" />
      </div>
      <Navbar />
      <div>
        <div>
          <img src="/images/icon-cart.svg" alt="Avatar" />
          <span>3</span>
        </div>
        <img src="/images/image-avatar.png" alt="Avatar" />
      </div>
    </header>
  );
}
