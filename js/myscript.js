
function loadContent(){
 var people=[];
 Persons.map(function(x){var d1="<div class='person'>";
                         var d2="<img src='"+x.myPhoto+"'/>";
                         var dx="<div>";
                         var d3="<p> Name: <strong>"+x.name+"</strong></p>";
                         var d4="<p> Surname: <strong>"+x.surname+"</strong></p>";
                         var d5="<p> Age: <strong>"+x.age+"</strong></p>";
                         var dy="</div>";
                         var de="</div>";
                         var d=d1+d2+dx+d3+d4+d5;
                         var inc=" onclick='incrementLikes("+people.length+")' ";
                         var l1="<p><button class='like'"+inc+">Like</button><span> ";
                         var l2=x.likes+"&hearts;</span></p>";
                         var l=l1+l2+dy+de;
                         people.push(d+l);
                          
             });
 var wrap1="<div id='personwrapper'>";
 var wrap=wrap1+people.join('')+"</div>";
 document.getElementById('dropContent').innerHTML=welcome.innerHTML+wrap;
 console.log('content loaded');
 console.log(people.join(''));            
 //console.log(welcome.innerHTML);
}

loadContent();

function incrementLikes(id){
 console.log("likes of id "+id+" with name "+Persons[id].name+" "+Persons[id].surname);
 ++Persons[id].likes;
 console.log("likes change to "+Persons[id].likes);
 loadContent();
};