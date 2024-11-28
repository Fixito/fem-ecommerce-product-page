export default function Cart() {
  return (
    <div>
      <header>
        <h3>Cart</h3>
      </header>
      <div>
        <div>
          <div>
            <img src="/images/image-product-1-thumbnail.jpg" alt="" />
          </div>
          <div>
            <h4>Fall Limited Edition Sneakers</h4>
            <p>
              <span>$125.00</span> x <span>3</span> <span>$375.00</span>
            </p>
          </div>
          <div>
            <button>
              <img src="/images/icon-delete.svg" alt="" />
            </button>
          </div>
        </div>
        <a href="#">Checkout</a>
      </div>
    </div>
  );
}
