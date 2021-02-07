export default function modalTemplate(item){
    let output  = `
        <div id="modal_content" >
        <button id="btnReject" class="btn btn_close" ><i class="fas fa-times-circle"></i></button>
            <h2 class="modal_title">Are you sure, you wanna adopt ${item[0].name}?</h2>
            <div id="itemID_${item[0].id}" >
                <h2>Name: ${item[0].name}</h2>
                <p>Color: ${item[0].color}</p>
                <p>Age: ${item[0].age}</p>
            </div>
        </div>
        <button id="btnConfirm" data-name="${item[0].name}" data-id="${item[0].id}" class="btn btn__load_more">Yes</button>
        `; 
    document.getElementById('adoptModalInfo').innerHTML = output;
}