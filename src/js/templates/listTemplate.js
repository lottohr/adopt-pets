export default function listTemplate(data){
    let output = ''
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
    
    document.getElementById('listData').innerHTML = output
}