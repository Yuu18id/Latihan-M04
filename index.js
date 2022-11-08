import Data from "./data.js";

let dataimg = new Data()
let show = function() {
    console.log(dataimg)
    dataimg.getProfile().then(data => {
        dataimg.showProfile(data);
    }).catch(e => console.log(e));
}

show();