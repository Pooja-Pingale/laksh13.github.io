const getBtn = document.getElementById('GetData');

const getDataApi = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/users/2');
    xhr.send();
    xhr.onload = () => {
        console.clear();
        console.log(JSON.parse(xhr.response).data);
    }
}
getBtn.addEventListener("click", getDataApi);

