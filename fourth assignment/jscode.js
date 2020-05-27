var isidok = false;
var ispwdok = false;
var ismbok = false;
var isageok = false;
var isaddressok = false;
function isuseridval()
{
    let uid = document.getElementById('userid').value;
    if(uid.length >= 3 && uid.length <= 15)
    {
        document.getElementById('idwarn').style.display = 'none';
        isidok = true;
    }
    else
    {
        document.getElementById('idwarn').style.display = 'block';
        isidok = false;
    }
}
function ispwdval()
{
    let pass = document.getElementById('pwd').value.toString();
    if(pass.length > 7)
    {
        document.getElementById('pwdwarn').style.display = 'none';
        ispwdok = true;
    }
    else
    {
        document.getElementById('pwdwarn').style.display = 'block';
        ispwdok = false;
    }
}
function ismobval()
{
let mobi=document.getElementById('mobile').value;
if(mobi.length ==10)
{
    document.getElementById('mbwarn').style.display = 'none';
    ismbok = true;
}
else
{
    document.getElementById('mbwarn').style.display = 'block';
    ismbok = false;
}
}
function isageval()
{
let mobi=document.getElementById('age').value;
if(mobi > 17 &&  mobi < 101)
{
    document.getElementById('agewarn').style.display = 'none';
    isageok = true;
}
else
{
    document.getElementById('agewarn').style.display = 'block';
    isageok = false;
}
}
function isvalidate()
{
    let addr=document.forms['simple']['address'].value;
    if(addr!='')
{
    document.getElementById('addwarn').style.display = 'none';
    isaddressok = true;
}
else
{
    document.getElementById('addwarn').style.display = 'block';
    isaddressok = false;
}
        if(isidok==true && ispwdok==true && ismbok==true && isageok==true && isaddressok==true)
        {
        alert('your form is submitted successfully');
        return true;
        }
        else
        {
        alert('please fill all the fields');
        return false;
        }
    }