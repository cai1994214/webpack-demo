
import demo from './demo1.png';
import CreateAvator from './createAvator.js'
import style from './index.scss';


CreateAvator(demo);

var dom = document.getElementById('root');
var img = new Image();
img.setAttribute('class', style.avator);// 使用css模块化
img.src = demo;
dom.append(img);