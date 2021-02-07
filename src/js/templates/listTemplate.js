export default function listTemplate(data){
    let output = "";
    if(data.length > 0){
        data.forEach((item)=>{
            output += `
                <div id="${item.id}" class="card">
                <img src="${item.img}" >
                    <div class="card__info">
                        <h2> ${item.name}</h2>
                        <p>Age: ${item.age}</p>
                        <p>Color: ${item.color}</p>
                    </div>
                    <button class="btn btn__adopt">Adopt me</button>
                </div>
            `;
        });
    }else{
        output += "<h2>Sorry no results found</h2>";
    }
    document.getElementById("listData").innerHTML = output;
}