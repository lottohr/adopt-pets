function _sort(data, state){

    if(state.sortOrder === 'asc' && state.sortBy ==='age'){
        return data.sort((a, b) => a.age - b.age)
    }
    else if(state.sortOrder === 'desc' && state.sortBy ==='age'){
        return data.sort((a, b) => b.age - a.age)
    }
    else if(state.sortOrder === 'asc' && state.sortBy ==='name'){
        return data.sort((a, b) => a.name.localeCompare(b.name))
    }
    else if(state.sortOrder === 'desc' && state.sortBy ==='name'){
        return data.sort((a, b) => b.name.localeCompare(a.name))
    }
}

export default _sort