var value = localStorage.length/6;

function sameNicknameCheck(nickname)
{
    for(var i = 0; i < localStorage.length/6; i++)
    {
        if(localStorage.getItem(`nickname ${i}`) == nickname)
            return true;
    }
    return false;
}

function save(event)
{ 
    var name = document.getElementById('first_name').value;
    var surname = document.getElementById('last_name').value;
    var nickname = document.getElementById('nickname').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var gender = document.getElementById('gender').value;

    if(sameNicknameCheck(nickname))
        window.confirm("Nickname is already taken");
    else
    {
        if(name === "" || surname === "" || nickname === "" || password === "" || email === "" || gender === "")
            window.confirm("One of your fields are empty");
        else
        {
            localStorage.setItem(`first_name ${value}`, name);
            localStorage.setItem(`last_name ${value}`, surname);
            localStorage.setItem(`nickname ${value}`, nickname);
            localStorage.setItem(`password ${value}`, password);
            localStorage.setItem(`email ${value}`, email);
            localStorage.setItem(`gender ${value}`, gender);
            window.confirm("Successfully registered");
            event.preventDefault();
            window.location.replace("../html/login.html");
        }
    }
} 
