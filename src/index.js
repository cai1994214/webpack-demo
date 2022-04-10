import Counter from './counter';
import Number from './number';
// import './style.css';
// var btn = document.createElement('button');
// btn.innerHTML = '点击';
// document.body.appendChild(btn);
// btn.onclick = function() {
//     var div = document.createElement('div');
//     div.innerHTML = 'item';
//     document.body.appendChild(div);
// }

Counter();

Number();

if(module.hot) {
    module.hot.accept('./number', () => {
        document.body.removeChild(document.getElementById('Number'));
        Number();
    })
}