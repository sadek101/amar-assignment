const handlLoad = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json()
    console.log(data.data);
    const tabContainer = document.getElementById("container-tab")

    

data.data.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <button onclick ="handleNow('${category.category_id}')" class="tab  ">${category.category }</button>
    `;
    tabContainer.appendChild(div);
})

}
const handleNow = async(categoryId) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await response.json()
    console.log(data.data);
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML='';

    data.data.forEach((youtube) => {
        const div = document.createElement('div')
        div.innerHTML =` <div class="card w-72 h-72 bg-base-100 m-4 shadow-xl">
  <figure><img src= ${youtube.thumbnail} alt="Shoes" /></figure>
  <div class="card-body">
    <div class="flex gap-2">
    <div>
      <img class="h-10 w-10 rounded-full" src=${youtube?.authors[0].profile_picture} alt="">
    </div>
    <div>
    <h2 class="card-title">${youtube.title}</h2>
    <div class ="flex">
    <h3>${youtube?.authors[0]?.profile_name}</h3>
    <img src="fi_10629607.png" alt="">
    </div>
    <p>${youtube.others.views} views </p>
  </div>
</div>   
  </div>
</div>`;
  cardContainer.appendChild(div)
   
     } )
 
     const dataFound = document.getElementById("data-found");

  if (data.data.categoryId[3].length === 0) {
    document.getElementById("data-found").removeAttribute("hidden")
  } else {
    document.getElementById("data-found").add("hidden")
  }
  dataFound.innerHTML = "";
}
function enventHandle(){
      window.location.href ='blog.html'
}
    
handlLoad()
handleNow('10')
