import style from './index.scss';

function CreateAvator (res) {
    var dom = document.getElementById('root');
    var img = new Image();
    img.setAttribute('class', style.avator);
    img.src = res;
    dom.append(img);
}

export default CreateAvator;