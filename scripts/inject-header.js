function injectHeader() {
  const header = `
    <header>
      <div>
        <img src="/assets/logo.png" alt="" />
        <h1>PurityWater</h1>
      </div>
      <ul>
        <a href="">Home</a
        ><a href="">Products</a
        ><a href="">Contact</a>
      </ul>
    </header>
  `;
  document.body.innerHTML = `${header}
   ${document.body.innerHTML}`;
}
