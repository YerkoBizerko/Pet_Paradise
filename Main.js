let ListProduct = document.querySelector('.ListProduct');

let ListProducts = [{
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

let AddDataWebsite = () => {
    return (ListProduct.innerHTML = ListProducts
        .map((x) => {
            let {id, name, price, image, desc} = x;
            return `
        <div id=product-id-${id} class="col-xl-3 col-lg-3 col-md-4 col-sm-6 item">
          <div class="card h-100">
            <img src=${image} class="card-img-top" alt="Product Image">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text fs-5">$${price}</p>
              <p class="card-text fw-light fs-5">${desc}</p>
              <div class="d-flex justify-content-center mt-4">
                <button type="button" class="btn btn-danger my-2 AddToCart">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
    `
        }).join(""));
};
AddDataWebsite();