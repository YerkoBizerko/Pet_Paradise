let ProductSummary = document.querySelector(".ProductSummary");
let basket = JSON.parse(localStorage.getItem("SavedCart")) || [];

  let CartCalculation = () => {
    let CartCounter = document.getElementById("CartAmount");
    CartCounter.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0)
  };
  
  CartCalculation();

  //Creates the checkout summary section based on whether the cart is empty or filled
  let GeneratePriceSummary = () => {
    let priceSummary = document.querySelector(".PriceSummary");
    if (basket.length >= 0) {
      priceSummary.innerHTML =
      `
            <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
            <hr class="my-4">

            <div class="d-flex justify-content-between mb-4 TotalItems">

            </div>

            <div class="mb-4 pb-2 Subtotal">

            </div>

            <h5 class="mb-3">Discount code</h5>

            <div class="mb-5">
                <input type="text" id="form3Examplea2" class="form-control form-control-lg" placeholder="Enter your code" />
            </div>

            <hr class="my-4">

            <div class="d-flex justify-content-between mb-5 TotalPrice">

            </div>

            <button type="button" class="btn btn-danger btn-lg">Place Order</button>
      `
    } else return;
  };

  //Creates the cart UI when entering the Cart.html page
  let GenerateCartSummary = () => {
    if(basket.length !== 0) {
      return (ProductSummary.innerHTML = basket
        .map((x) => {
            let {id, item} = x;
            let search = ListProducts.find((y) => y.id === id) || [];
            return `            
                            <div class="card mb-4 border-0">
                                <div class="card-body">
                                  <div class="row d-flex justify-content-between align-items-center">
                                    <div class="mb-3 mb-sm-0 col-sm-12 col-md-3 col-lg-2 col-xl-2">
                                      <a href="Shop.html"><img
                                        src=${search.image}
                                        class="img-fluid rounded-3"></a>
                                    </div>
                                    <div class="col-sm-12 col-md-4 col-lg-3 col-xl-3">
                                      <p class="mt-md-1 mt-sm-3 lead">${search.name}</p>
                                    </div>

                                    <div class="mb-3 mb-sm-0 col-sm-12 col-md-2 col-lg-2 col-xl-2 offset-lg-1">
                                        <h5 class="mb-sm-4 mb-md-2">$${search.price}</h5>
                                      </div>


                                    <div class="mb-md-1 col-md-2 col-lg-3 col-xl-3 d-flex mb-4">
                                      <button class="btn btn-link px-0">
                                        <i class="bi bi-dash" onclick="decrement(${id})"></i>
                                      </button>
                      
                                      <span id="${id}" class="d-flex border align-items-center ps-3" style="width: 100%;">${item}</span>
                      
                                      <button class="btn btn-link px-0">
                                        <i class="bi bi-plus" onclick="increment(${id})"></i>
                                      </button>
                                    </div>


                                    <div class="col-md-1 col-lg-1 col-xl-1 text-end mb-1 mt-md-0 mt-sm-3">
                                      <a href="#" class="text-danger"><i class="bi bi-trash-fill fs-5" onclick="RemoveFromCart(${id})"></i></a>
                                    </div>
                                  </div>
                                </div>
                            </div>
                            <hr class="my-4"></hr>
    `
        }).join(""));    
    }
    else {
      ProductSummary.innerHTML =
      `                         
                            <div class="card mb-4 border-0">
                                <div class="card-body">
                                  <div class="row d-flex justify-content-between align-items-center col-md-4 col-sm-6">
                                  <img src="./images/undraw_empty_cart_co35.svg">
                                  </div>
                                  <h1 class="text-black mt-5">Cart is empty</h1>
                                </div>
                            </div>
                                
      `
    }

  };
  GenerateCartSummary();
  GeneratePriceSummary();

  let increment = (id) => {

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
    update(id);
    SubtotalCalculation();
    TotalPriceCalculation();
    TotalItemCount();
  };

  let decrement = (id) => {

    let search = basket.find((product) => product.id === id)

    if (search.item === 1) return;
    else {
      search.item -=1;
    }
    localStorage.setItem("SavedCart", JSON.stringify(basket));
    CartCalculation();
    update(id);
    SubtotalCalculation();
    TotalPriceCalculation();
    TotalItemCount();
  };

  //Updates the number of items in form fields when item amount is incremented/decremented
  let update = (id) => {
    let search = basket.find((x) => x.id === id)
    document.getElementById(id).innerHTML = search.item;
  };

    //Calculates total number of items in cart for the checkout summary
  let TotalItemCount = () => {
    if (basket.length >=0) {
    let totalItems = document.querySelector(".TotalItems");
    let amount = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
    totalItems.innerHTML = 
    `
    <h5 class="mb-4">Item total: ${amount}</h5>
    `
  } else return;
  };

  //Calculates the Subtotal of all items in the cart prior to discount application
  let SubtotalCalculation = () => {
    let subtotal = document.querySelector(".Subtotal");
    if (basket.length >= 0) {
      let amount = basket
      .map((x) => {
      let {id, item} = x;
      let search = ListProducts.find((y) => y.id === id) || [];

      return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
      subtotal.innerHTML =
      `
      <h5>Subtotal: $${amount.toFixed(2)}</h5>
      `
    }
  }  

  //Calculates total price of all items in cart for the checkout summary
  let TotalPriceCalculation = () => {
    let totalPrice = document.querySelector(".TotalPrice");
    if (basket.length >= 0) {
      let amount = basket
          .map((x) => {
          let {id, item} = x;
          let search = ListProducts.find((y) => y.id === id) || [];

          return item * search.price;
          })
          .reduce((x, y) => x + y, 0);
    totalPrice.innerHTML = 
    `
    <h5 class="text-uppercase">Total price</h5>
    <h5>$${amount.toFixed(2)}</h5>
    `
  } else return;
  };

  //Removes item from basket when trash icon is clicked
  let RemoveFromCart = (id) => {
  basket = basket.filter((x) => x.id !== id);
  localStorage.setItem("SavedCart", JSON.stringify(basket));
  GenerateCartSummary();
  CartCalculation();
  TotalItemCount();
  TotalPriceCalculation();
  SubtotalCalculation();
  };

  TotalItemCount();
  SubtotalCalculation();
  TotalPriceCalculation();
