export default function carouselTemplate(data){
    let output = "";
    data.forEach((item)=>{
        output += `
            <div id="${item.id}" class="slide carousel__item ">
                <div class="carousel__item__info" style="background-image:url('${item.img}')">
                    <h2 class="carousel__item__info__title"> ${item.name}</h2>
                </div>
            </div>
        `;
    });
    document.getElementById("carouselContent").innerHTML = output;
}