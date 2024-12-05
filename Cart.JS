let CartItem = document.querySelector('.CartItem');

let CartProducts = [{
    id: 1,
    name: "Organic Dog Food",
    price: 23.99,
    image: "../Images/dogfood.jpg",
    desc: "Natural food for your furry friend."
},
{
    id: 2,
    name: "Cat Scratching Post",
    price: 44.99,
    image: "../Images/cat_scratcher.jpg",
    desc:"Durable playground for your cat."
},
{
    id: 3,
    name: "Bird Feeder",
    price: 99.99,
    image: "../Images/bird_feeder.jpg",
    desc: "Spacious and stylish for your bird."
},
{
  id: 4,
  name: "Cat Scratching Post",
  price: 49.99,
  image: "../Images/cat_scratcher.jpg",
  desc:"Durable playground for your cat."
},
{
  id: 5,
  name: "Bird Feeder",
  price: 99.99,
  image: "../Images/bird_feeder.jpg",
  desc: "Spacious and stylish for your bird."
},
{
  id: 6,
  name: "Organic Dog Food",
  price: 23.99,
  image: "../Images/dogfood.jpg",
  desc: "Natural food for your furry friend."
},
{
  id: 7,
  name: "Cat Scratching Post",
  price: 49.99,
  image: "../Images/cat_scratcher.jpg",
  desc:"Durable playground for your cat."
},
{
  id: 8,
  name: "Organic Dog Food",
  price: 23.99,
  image: "../Images/dogfood.jpg",
  desc: "Natural food for your furry friend."
}
];

let CartUpdate = () => {
    return (CartItem.innerHTML = CartProducts
        .map((x) => {
            let {id, name, price, image, desc} = x;
            return `
            <div class="card mb-4 border-0" id=product-id-${id}>
                <div class="card-body">
                    <div class="row d-flex justify-content-between align-items-center">
                    <div class="col-sm-12 col-md-3 col-lg-2 col-xl-2">
                        <a href="Shop.html"><img
                        src=${image}
                        class="img-fluid rounded-3" alt="Cotton T-shirt"></a>
                    </div>
                    <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                        <p class="mt-md-1 mt-sm-3 lead">${name}</p>
                    </div>

                    <div class="col-sm-12 col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h5 class="mb-sm-4 mb-md-2">$${price}</h5>
                        </div>

                    <!-- Buttons to control item amount -->
                    <div class="col-md-2 col-lg-3 col-xl-3 d-flex mb-1">
                        <button class="btn btn-link px-0"
                        onclick="decrement(${id})">
                        <i class="bi bi-dash"></i>
                        </button>
        
                        <input id=${id} min="0" value="1" type="number"
                        class="quantity form-control form-control-sm" />
        
                        <button class="btn btn-link px-0"
                        onclick="increment(${id})">
                        <i class="bi bi-plus"></i>
                        </button>
                    </div>

                    <!-- trash feature -->
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end mb-1 mt-md-0 mt-sm-3">
                        <a href="#" class="text-danger"><i class="bi bi-trash-fill fs-5"></i></a>
                    </div>
                    </div>
                </div>
            </div>

            <hr class="my-4">
    `
        }).join(""));
  };
  CartUpdate();
