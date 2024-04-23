function injectFooter() {
  const footer = `
      <footer>
        <div>
          <p>
            All Rights Reserved &copy; 2024 Purity Water 
          </p>
        </div>
      </footer>
    `;
  document.body.innerHTML = `
     ${document.body.innerHTML}${footer}`;
}

injectFooter();
