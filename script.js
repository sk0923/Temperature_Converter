var cel= document.getElementById("cel");
var feh = document.getElementById("feh");

cel.addEventListener('input', function(){
    let v = this.value;
    let f= (v* 9/5)+32;
    if(!Number.isInteger(f)){
        f = f.toFixed(3);
    }
    feh.value = f;
});
feh.addEventListener('input', function(){
    let v = this.value;
    let c = (v-32)*5/9;
    if(!Number.isInteger(c)){
        c = c.toFixed(3);
    }
    cel.value = c;
});