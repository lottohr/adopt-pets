function _filter(data, state){
    
    if(state.filterColor !== 'null'){
        data = data.filter(el => el.color == state.filterColor.toLowerCase());    
    }

    if(state.filterAge1!== 'null'){
        data = data.filter(el => el.age <= state.filterAge1);   
    }

    if(state.filterAge2!== 'null'){
        data = data.filter(el => el.age <= state.filterAge2);   
    }

    return data
}

export default _filter