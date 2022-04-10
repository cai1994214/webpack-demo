function Number() {
    var div = document.createElement('div');
    div.setAttribute('id', 'Number');
    div.innerHTML = 2000;
    div.onclick = function() {
        div.innerHTML = (div.innerHTML)*1 + 1;
    }
    document.body.appendChild(div)
}
export default Number;