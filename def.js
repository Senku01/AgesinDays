function ageindays() {
    var birthyear = prompt("Whats Your BirthYear??");
    var age = (2020 - birthyear)*365;
    var h1 = document.createElement('h1');
    var textanswer = document.createTextNode("It's Been " +   age+ "Days Since You Came To Earth");
    h1.setAttribute('id','ageindays');
    h1.appendChild(textanswer); 
    document.getElementById('flex-box-result').appendChild(h1);
}
function reset()
{
    document.getElementById('ageindays').remove();
}