import sortData from "../../js/helpers/sort.js";
import filterData from "../../js/helpers/filters.js";
import searchData from "../../js/helpers/search.js";
import renderTemplate from "../../js/templates/listTemplate.js";
import renderModal from "../../js/templates/modalTemplate.js";

function listController(state, jsonData){
    let data = jsonData.slice(0, state.currentItems);
    let deletedData = [];
    const btnLoadMore = document.getElementById("btnLoadMore");
    const sortByBtns = document.formSortBy.sortBy;
    const sortOrderBtns = document.formSortOrder.sortOrder;
    const filterAge1 = document.getElementById("filterAge1");
    const filterAge2 = document.getElementById("filterAge2");
    const filterColor = document.getElementById("filterColor");
    const orderBtn = document.getElementById("age");
    const sortBtn = document.getElementById("asc");
    const adoptBtn = document.getElementsByClassName("btn__adopt");

    // Load first num of items
    renderTemplate(data);
    setSearchInput();
    showModal();

    btnLoadMore.onclick = function() {
        state.currentItems += 20;
        state.sortOrder = "asc";
        state.sortBy ="age";

        // Set radio buttons to default value
        orderBtn.checked = true;
        sortBtn.checked = true;

        // Set filter to default value
        filterAge1.checked = false;
        filterAge2.checked = false;
        filterColor.checked = false;

        data = jsonData.slice(0, state.currentItems);

        if(state.currentItems >= state.totalItems){
            btnLoadMore.setAttribute("style", "display:none"); 
        }
        document.dispatchEvent(dataUpdated);
    };    

    sortByBtns.forEach((btn)=>{
        btn.addEventListener("change", function() {
            state.sortBy = this.value;
            document.dispatchEvent(dataUpdated);
        });
    })

    sortOrderBtns.forEach((btn)=>{
        btn.addEventListener("change", function() {
            state.sortOrder = this.value;
            document.dispatchEvent(dataUpdated);
        }); 
    })
    
    function setFilter(filter){
        let filterName = filter.id;
        filter.addEventListener("change", function(){
            if (this.checked == 1){
                state[`${filterName}`] = this.value;
                data = filterData(data, state);
            } else{
                state[`${filterName}`] = "null";
                data = filterData(jsonData.slice(0, state.currentItems), state);
            }
            document.dispatchEvent(dataUpdated);
        })
    }

    // Init filters
    setFilter(filterColor);
    setFilter(filterAge2);
    setFilter(filterAge1);

    function setSearchInput(){
        const search_input = document.getElementById("search");
        let search_term = "";
        search_input.addEventListener("input", (e) => {
            search_term = e.target.value;
            data = searchData(jsonData, state, search_term);
            document.dispatchEvent(dataUpdated);
            if(state.currentItems >= state.totalItems || search_term !=="" ){
                btnLoadMore.setAttribute("style", "display:none"); 
            }else{
                btnLoadMore.setAttribute("style", "display:block");
            }
        });
    }

    function showModal(){
        for (let i = 0; i < adoptBtn.length; i++) {
            adoptBtn[i].onclick = ()=>{
              renderModal(data.filter(el => el.id == adoptBtn[i].parentNode.dataset.id));
              document.dispatchEvent(listModalLodade);
            }
        }
    }

    // Custom events
    const dataUpdated = new Event("updated");
    const listModalLodade = new Event("modalLoaded");

    document.addEventListener("updated", () => {   
        data = data.filter(e  => !deletedData.includes(e) )
        sortData(data, state);
        renderTemplate(data);
        showModal();
    })

    document.addEventListener("modalLoaded", () => {   
        let btnReject = document.getElementById("btnReject");
        let btnConfirm = document.getElementById("btnConfirm");
        let body = document.body;
        body.classList.add("modal-opened");

        document.getElementById("adoptModal").style.display="block";
        btnConfirm.onclick = ()=>{
            data.forEach((el)=>{
                if(el.id == btnConfirm.dataset.id){
                    deletedData = [...deletedData, el];
                } 
            })
            document.dispatchEvent(dataUpdated);
            document.getElementById("adoptModal").style.display="none";
            body.classList.remove("modal-opened");
        }

        btnReject.onclick = ()=>{
            document.getElementById("adoptModal").style.display="none";
            body.classList.remove("modal-opened");
        }
    })
}
export default listController