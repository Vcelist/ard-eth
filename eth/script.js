var a;
a=1;


document.body.innerHTML += "<button value=\"\" class=\"btn\" onclick=\"addText();\">" + some + "</button>";
document.body.innerHTML += "<button value=\"\" class=\"btn\" onclick=\"addVara();\">" + "+" + "</button>";
document.body.innerHTML += "<button value=\"\" class=\"btn\" onclick=\"\">" + "-" + "</button>";
document.body.innerHTML += "<input type=\"text\" name=\"pole\" size=\"10\" maxlength=\"15\" value=\"hello world\" />";
document.body.innerHTML += "<p><button value=\"\" class=\"btn\" onclick=\"addStyle();\">" + "Сделать красиво" + "</button></p>";
document.body.innerHTML += "<br>";
document.body.innerHTML += "Нажми её, чтобы добавить текст ниже";
document.body.innerHTML += "<br>";
document.body.innerHTML += "<br>";
var text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis et soluta blanditiis voluptates pariatur, ducimus molestiae commodi placeat quae doloremque optio eum eveniet, at odio harum cumque architecto, sapiente saepe. ";
function addVara() {
 document.pole.value += a;
}
function addText() {
    document.body.innerHTML += text;
}





function addStyle() {
    document.body.innerHTML += "<style>.btn{width:200px; height:50px; margin-right:10px; border-radius:50px; border:none; background:#1D8BB8; color:white; font-size:16px;}</style>";
    document.body.style = "background:#D8E0E7; color:red; font-size:18px;"
}
