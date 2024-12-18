let ListProduct = document.querySelector('.ListProduct');

let basket = JSON.parse(localStorage.getItem("SavedCart")) || [];

let AddDataWebsite = () => {
    return (ListProduct.innerHTML = ListProducts
        .map((x) => {
            let {id, name, price, image, desc} = x;
            return `
        <div id=product-id-${id} class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
          <div class="card h-100">
            <img src=${image} class="card-img-top" alt="Product Image">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text fs-5">$${price}</p>
              <p class="card-text fw-light fs-5">${desc}</p>
              <div class="d-flex justify-content-center mt-4">
                <button type="button" class="toastbtn btn btn-danger my-2" onclick="AddCart(${id})">Add to cart</button>

              </div>
            </div>
          </div>
        </div>
    `
        }).join(""));
};
AddDataWebsite();

let AddCart = (id) => {
  let search = basket.find((product) => product.id === id)

  if (search === undefined){
    basket.push({
      id: id,
      item: 1,
    });
  }
  else {
    search.item +=1
  }
  localStorage.setItem("SavedCart", JSON.stringify(basket));
  CartCalculation();
};

let CartCalculation = () => {
  let CartCounter = document.getElementById("CartAmount");
  CartCounter.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0)
};

CartCalculation();

let toastTriggers = document.querySelectorAll(".toastbtn");
let toastLiveExample = document.getElementById('liveToast');

toastTriggers.forEach((toastTrigger) => {
    if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
        toastTrigger.addEventListener('click', () => {
            toastBootstrap.show();
        });
    }
});