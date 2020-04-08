import "./style.scss"
import _ from 'lodash';

var anchor = document.getElementById("content")

import helloworld from "./modules/helloworld";
anchor.appendChild(helloworld());

anchor.load("./modules/navbar.html")