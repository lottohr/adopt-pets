import filterData from "../../js/helpers/filters.js";

function _search(jsonData, state, input) {
    let data;
    if(input !== ""){
        data = filterData(jsonData, state);
        data = data.filter(
            el => el.name.toLowerCase().includes(input.toLowerCase())
        )
    }else{
        data = filterData(jsonData.slice(0, state.currentItems), state);
    }
    return data;
}
export default _search