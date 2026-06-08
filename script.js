let stage=1;
function urea()
{
    stage++;
    if(stage==2)
    {
        document.getElementById("tree").src="plant2.png.png";
        document.getElementById("info").innerHTML="You can add urea to grow plant";
    }
   else if(stage==3)
    {
        document.getElementById("tree").src="tree1.png.png";
        document.getElementById("info").innerHTML="The plant is growing! You can add some more urea to grow";
    }
    else if(stage==4)
    {
        document.getElementById("tree").src="tree2.png.png";
        document.getElementById("info").innerHTML="The plant is fully grown its time to flowering";
    }
}
function addflowers()
{
    
        document.getElementById("tree").src="flower.png";
        document.getElementById("info").innerHTML="Potassium nitrate helps the tree produce flowers.";
    
}
function addfruits()
{


        document.getElementById("tree").src="fruit.png";
        document.getElementById("info").innerHTML="Potassium sulphate helps the tree produce fruits.";
}
function addwater()
{
    document.getElementById("tree").src="watering.png";
    document.getElementById("info").innerHTML="You can water the plant";
}
function addpesticide()
{
    document.getElementById("tree").src="2,4-D.png";
    document.getElementById("info").innerHTML="2,4-D is a herbicide and should be used carefully.";
}