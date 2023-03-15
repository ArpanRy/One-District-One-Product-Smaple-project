window.onload = function() {
    const top_products = [];
    districts_products.states.forEach((state) => {
        state.districts.forEach((district) => {
            const prod_obj = JSON.parse(JSON.stringify(district.products[0]));
            prod_obj.district = district.district;
            prod_obj.state = state.state;
            top_products.push(prod_obj);
        });
    });
    const product_grid = document.getElementById("top_products");
    top_products.map((product, index) => {
        var product_demo = document.getElementById("top_product_demo");
        const clone = product_demo.cloneNode(true);
        clone.id = "product_" + index;
        clone.hidden = false;
        // if ((index + 1) % 5 == 0) {
        //   clone.className = clone.className + " dev";
        // }
        // else if ((index + 1) % 2 == 0) {
        //   clone.className = clone.className + " des";
        // }
        // else if ((index + 1) % 3 == 0) {
        //   clone.className = clone.className + " gra";
        // }
        clone.getElementsByTagName("h4")[0].innerHTML = product.name;
        clone.getElementsByTagName("h6")[0].innerHTML = product.price;
        clone.getElementsByTagName("p")[0].innerHTML = product.description + "<br></br>" + "State : " + product.state + " District : " + product.district;
        clone.getElementsByTagName("img")[0].src = product.img;
        product_grid.appendChild(clone);
        return clone;
    });

    return;
}