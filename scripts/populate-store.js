class PopulateStore {
  constructor() {
    console.log("store population in process");
    this.loopCatalog();
  }
  catalog = [
    {
      name: "100ml Bottled Water",
      price: "$100",
      img: "",
    },
    {
      name: "15L Bottled Water",
      price: "$360",
      img: "",
    },
    {
      name: "24 Pack Water Bottle",
      price: "$1060",
      img: "",
    },
  ];
  loopCatalog() {
    this.catalog.map((item) => {
      document.getElementsByTagName("main")[0].innerHTML += `
        <div>
            <img src={${item.img}}/>
            <div>
                <span>${item.name}</span>
                <span>${item.price}</span>
            </div>
        </div>
        `;
    });
  }
}

new PopulateStore();
