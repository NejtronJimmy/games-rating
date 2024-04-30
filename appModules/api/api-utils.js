async function getData(url) {
    try {
    const response = await fetch(url);
    return response.json();
    } catch (error) {
    console.log(error);
    }
    }
    function getRandomgame(array){
        const randomIndex = math.floor(math.random() * array.length);
        return array[randomIndex]
    }
    module.exports = { getData, getRandomgame};