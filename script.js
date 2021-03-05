function calculate()
{
    var billamount = document.getElementById('billamt').value;
    var sQual = document.getElementById('servicequal').value;
    var noOfPeople = document.getElementById('peopleamt').value;
    if(billamount==="" || sQual===0){
        alert("Enter the values")
        return;
    }
    if(noOfPeople === "" || noOfPeople <= 1)
    {
        noOfPeople = 1;
        document.getElementById('each').style.display = "none";
    }
    
    else{
        document.getElementById('each').style.display= "block";
    }
    console.log(noOfPeople);

    var total = (billamount*sQual)/noOfPeople;
    total = Math.round(total*100)/100
    total = total.toFixed(2);
    
    document.getElementById('totalTip').style.display = "block";
    document.getElementById('tip').innerHTML = total;
}


document.getElementById('totalTip').style.display ="none";
document.getElementById('each').style.display ="none";


document.getElementById('calculate').onclick = function(){
    calculate();
}