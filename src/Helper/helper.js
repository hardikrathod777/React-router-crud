

export const getData = () => {

    let data = JSON.parse(localStorage.getItem('myData'));

    if (data) {
        return data;
    } else {
        return [];
    }

}