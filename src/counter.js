function Counter() {
    var div = document.createElement('div');
    div.setAttribute('id', 'counter');
    div.innerHTML = 1;
    div.onclick = function() {
        div.innerHTML = (div.innerHTML)*1 + 1;
    }
    document.body.appendChild(div)
}
export default Counter;