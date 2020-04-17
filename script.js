/** Add any JavaScript you need to this file. */
(function() {
  let items = {
    all: window.items,
    getByCate: function(category) {
      //takes the category and return all the products in that category
      //if no cattegory is send, send everything
      if(category){
          let array = items.all.filter(function(element){
            if(element.category === category)
              return element;
          });
        return array;
      }
        return items.all;
      
    }
  };
  /*
      <div class="card">
          <img src="https://blvcks.com/wp-content/uploads/2017/09/o4j_Hmqy2-g.jpg" alt="Denim Jeans">
          <h5>LOUIS VUITTON X SUPREME BOX LOGO HOODED SWEATSHIRT</h1>
          <p class="price">$500.00</p>
          <p>This Supreme x Louis Vuitton hoodie is a perfectly stylish addition to your wardrobe.</p>
          <p><button>Add to Cart</button></p>
        </div>
  */
  let toScreen = {
    removearray: function(){
      let content = document.getElementById("content");
      content.innerHTML = "";
    },
    arrayToWindow: function(category){
      let content = document.getElementById("content");
      let array = items.getByCate(category);

      array.forEach(function(element) {
        let div = document.createElement("div");
        div.className = "card";
        let img = document.createElement("img");
        img.src = element.picture;
        img.alt = element.name;
        div.appendChild(img);

        let name = document.createElement("h5");
        name.innerHTML = element.name;
        div.appendChild(name);

        let price = document.createElement("p");
        price.innerHTML = element.price;
        price.className = "price";
        div.appendChild(price);

        let desc = document.createElement("p");
        desc.innerHTML = element.desc;
        desc.className = "desc";
        div.appendChild(desc);
        
        let buttoncont = document.createElement("p");
        let button= document.createElement("button");
        button.innerHTML = "Add to Cart";
        buttoncont.appendChild(button);
        div.appendChild(buttoncont);

        content.appendChild(div);
      });
      

    }

  };
  function setupMenuHandlers() {
    toScreen.arrayToWindow();

    var hot = document.getElementById("Hot");
    hot.addEventListener('click', function() {
      toScreen.removearray();
      toScreen.arrayToWindow("Hot");
    });

    var home = document.getElementById("home");
    home.addEventListener('click', function() {
      toScreen.removearray();
      toScreen.arrayToWindow();
    });

    var newA = document.getElementById("New Arrival");
    newA.addEventListener('click', function() {
      toScreen.removearray();
      toScreen.arrayToWindow("New Arrival");
    });

  }

  window.onload = setupMenuHandlers;
})();

