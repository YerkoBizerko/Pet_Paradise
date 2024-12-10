let PriceSummary = document.querySelector(".PriceSummary");
let ProductSummary = document.querySelector(".ProductSummary");
let basket = JSON.parse(localStorage.getItem("SavedCart")) || [];

  let CartCalculation = () => {
    let CartCounter = document.getElementById("CartAmount");
    CartCounter.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0)
  };
  
  CartCalculation();

  let GenerateCartSummary = () => {
    if(basket.length !== 0) {
      return (ProductSummary.innerHTML = basket
        .map((x) => {
            let {id, item} = x;
            let search = ListProducts.find((y) => y.id === id) || [];
            return `
            <section class="">
                <div class="container py-5">
                    <div class="col-12">
                      <div class="card">
                        <div class="card-body p-0">
                          <div class="row g-0">
                            <div class="col-lg-8">
                              <div class="p-5">
                                <div class="d-flex justify-content-between align-items-center mb-5">
                                  <h1 class="fw-bold mb-0">Shopping Cart</h1>
                                  <h6 class="mb-0 text-muted">1 items</h6>
                                </div>

                                
                            <div class="card mb-4 border-0">
                                <div class="card-body">
                                  <div class="row d-flex justify-content-between align-items-center">
                                    <div class="mb-3 mb-sm-0 col-sm-12 col-md-3 col-lg-2 col-xl-2">
                                      <a href="Shop.html"><img
                                        src=${search.image}
                                        class="img-fluid rounded-3" alt="Cotton T-shirt"></a>
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
                                      <a href="#" class="text-danger"><i class="bi bi-trash-fill fs-5"></i></a>
                                    </div>
                                  </div>
                                </div>
                            </div>
                            <hr class="my-4"></hr>
                                

                                <div class="pt-5">
                                  <h6 class="mb-0"><a href="./Shop.html" class="text-body">
                                    <i class="bi bi-arrow-left me-2"></i>Back to shop</a>
                                  </h6>
                                </div>
                              </div>
                            </div>
                        
                            <div class="col-lg-4 bg-body-tertiary">
                              <div class="p-5">
                                <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                <hr class="my-4">
              
                                <div class="d-flex justify-content-between mb-4">
                                  <h5 class="mb-4">Items 1</h5>
                                  <h5>$44.00</h5>
                                </div>
                    

                                <h5 class="mb-3">Shipping</h5>
              
                                <div class="mb-4 pb-2">
                                  <select>
                                    <option value="1">Delivery (Standard) - $5.00</option>
                                    <option value="2">Delivery (Express) - $10.00</option>
                                    <option value="3">Delivery (Rural) - $12.00</option>
                                  </select>
                                </div>
              
                                <h5 class="mb-3">Discount code</h5>
              
                                <div class="mb-5">
                                    <input type="text" id="form3Examplea2" class="form-control form-control-lg" placeholder="Enter your code" />
                                </div>
              
                                <hr class="my-4">
              
                                <div id="PriceSummary" class="d-flex justify-content-between mb-5">
                                  <h5 class="text-uppercase">Total price</h5>
                                  <h5>$44.00</h5>
                                </div>
              
                                <button type="button" class="btn btn-danger btn-lg">Place Order</button>
              
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </section>
    `
        }).join(""));
    }
    else {
      ProductSummary.innerHTML =
      `
      <h1 class="text-black mt-5">Cart is empty</h1>
      `
    }
  };

  GenerateCartSummary();

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
  };

  let update = (id) => {
    let search = basket.find((x) => x.id === id)
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
  };