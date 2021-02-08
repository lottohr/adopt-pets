const getData = async () =>{
    const response = await fetch("./data.json");
    const data = await response.json();

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        data.forEach((obj, id) => {
            Object.assign(obj, {
                id: id,
                img: `img/${obj.name.toLowerCase()}.jpg`
            });
        });
    }
    return data;
}

export default getData