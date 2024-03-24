$$('h1').forEach(function(h1){
    let len = h1.textContent.length, s = h1.style;

    s.width = len + 'ch';
    s.animationTimingFunction = "steps('+len+'),steps(1)"
});
function changeToCSS(){
    document.getElementById("what").innerHTML = "Now, we've added some CSS!"
    document.getElementById("description").innerHTML = "It's not so boring now, is it?"
    document.getElementById("html").style.backgroundColor = "#1da58a";
    document.getElementById("html").style.color = "white";
    document.getElementById("html").style.fontFamily = "sans-serif";
    document.getElemetById("button").style.borderRadius = "50px";
    document.getElementById("button").style.backgroundColor = "#13025";
    
  }