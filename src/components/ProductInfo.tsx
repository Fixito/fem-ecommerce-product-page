function ProductInfo() {
  return (
    <section>
      <div>
        <p>SNEAKER COMPANY</p>
        <h1>Fall Limite Snkears</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div>
          <div>
            <span>$125.00</span>
            <span>50%</span>
          </div>
          <span>$250.00</span>
        </div>
      </div>

      <div>
        <div>
          <button aria-label="Decrease by one">
            <img src="/images/icon-minus.svg" alt="" />
          </button>
          <span>3</span>
          <button aria-label="Increase by one">
            <img src="/images/icon-plus.svg" alt="" />
          </button>
        </div>
        <button>
          <img src="/images/icon-cart.svg" alt="" />
          Add to cart
        </button>
      </div>
    </section>
  );
}
export default ProductInfo;
