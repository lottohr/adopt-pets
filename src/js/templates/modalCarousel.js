export default function modalCarousel(item){

    let output  = ` 
        <div id="modal_content modal_carousel">
        <button id="btnClose" class="btn btn_close" ><i class="fas fa-times-circle"></i></button>
            <div id="itemID_${item[0].id}" >
                <h2>Name: ${item[0].name}</h2>
                <p>Color: ${item[0].color}</p>
                <p>Age: ${item[0].age}</p>
            </div>
        </div>
        `; 
    document.getElementById('adoptModalInfo').innerHTML = output
}