function injectHeader() {
  const header = `
    <header>
      <div>
        <img src="./assets/logo.png" alt="" />
        <h1>PurityWater</h1>
      </div>
      <ul>
        <a href="/">Home</a
        ><a href="/store">Products</a
        ><a href="/contact">Contact</a>
      </ul>
    </header>
  `;
  document.body.innerHTML = `${header}
   ${document.body.innerHTML}`;
}
