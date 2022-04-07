import Header from "./header.js";
import Sidebar from "./sidebar.js";
import demo from './demo1.png';

var dom = document.getElementById('root');
var img = new Image();
img.src = demo;
dom.appendChild(img);
new Header();
new Sidebar();