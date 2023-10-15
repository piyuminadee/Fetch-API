fetch('https://fakestoreapi.com/products').then((data)=>{
   return data.json();
}).then((completedata)=>{
    // console.log(completedata[2].title);
    // document.getElementById('root').innerHTML=completedata[2].title;
    let data1="";
    completedata.map((values)=>{
        data1+=`<div class="card">
        <h1 class="title">${values.title}</h1>
        <img src=${values.image} class="images">
        <p class="category">${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
        <button>Add tocrt</button>
      </div>`
    });
    document.getElementById("cards").innerHTML=data1;
}).catch((err)=>{
        console.log(err);
        
    })



