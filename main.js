//function for get total  => done

let = title = document.getElementById('title');
let = price = document.getElementById('price');
let = tax = document.getElementById('tax');
let = ads = document.getElementById('ads');
let = discount = document.getElementById('discount');
let = total = document.getElementById('total');
let = count = document.getElementById('count');
let = category = document.getElementById('category');
let = submit = document.getElementById('submit');

function get_total() {

    if (price.value != '') {
        let result = (+price.value + +tax.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.background = 'green';
    } else {
        total.innerHTML = '';
        total.style.background = 'red';

    }

}

// function for add product informatio to data => done
let productInformation;
if (localStorage.prouducts != null) {
    productInformation = JSON.parse(localStorage.prouducts);
} else {
    productInformation = [];
}


submit.onclick = function () {
    let newProducts = {
        title: title.value,
        price: price.value,
        tax: tax.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value
    }

    if(newProducts.count > 1){
        for(i = 0; i<newProducts.count; i++){
            productInformation.push(newProducts);
        }
    }else{
        productInformation.push(newProducts);

    }

    localStorage.setItem('prouducts', JSON.stringify(productInformation));

    clearFields();
    total.style.background = 'red';
    getData();

}


//function for clear all fields

function clearFields() {
    title.value = '';
    price.value = '';
    tax.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
}


//function for get Data (Read)
function getData() {
    let data = '';
    for (i = 0; i < productInformation.length; i++) {
        data += `        <tr>
        <td>${i}</td>
        <td>${productInformation[i].title}</td>
        <td>${productInformation[i].price}</td>
        <td>${productInformation[i].tax}</td>
        <td>${productInformation[i].ads}</td>
        <td>${productInformation[i].discount}</td>
        <td>${productInformation[i].total}</td>
        <td>${productInformation[i].category}</td>
        <td><button id="Update">Update</button></td>
        <td><button id="delete" onclick="deleteSingleProduct(${i})">Delete</button></td>
        
    </tr>
`;

    }
    document.getElementById('tbody').innerHTML = data;
    let removeAll = document.getElementById('removeAll');
    removeAll.innerHTML = `Remove All Products (${productInformation.length})`;
    if (productInformation.length > 0) {
        removeAll.style.display = 'block';
    } else {
        removeAll.style.display = 'none';
    }
}
 //
getData();


// function for delete one product
function deleteSingleProduct(i) {
    productInformation.splice(i, 1);
    localStorage.prouducts = JSON.stringify(productInformation);
    getData();

}


// function for delete all products
function deleteAll(){
    localStorage.clear();
    productInformation.splice(0);
    getData();
}


