import UrlConstant from '../helpers/UrlConstants'

export let getAllItems = async () => {
    try {
        let response = await fetch(UrlConstant.baseUrl, {
            method: 'GET',
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json'
            }
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error.message);
        return null
    }
}

export let addItems = async (name, price, imgUrl) => {
    try {
        console.log("name", name)
        let response = await fetch(UrlConstant.baseUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                price: price,
                img: imgUrl
            }),
        })
        const result = await response.json();
        return result;
    }
    catch (e) {
        console.log(error.message);
        return null
    }
}