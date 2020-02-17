function getFirstSelector(selector)
{
 
 return document.querySelector(selector)
  
}
function nestedTarget()
{

  return document.getElementById('nested').querySelector('div.target')
  
}
<<<<<<< HEAD

function increaseRankBy(n)
{
  const rank = document.getElementById('app')
  .querySelectorAll('ul.ranked-list li');
  
  for (let i = 0; i < rank.length; i++)
=======
function increaseRankBy(n)
{
  cons rank = document.getElementById('app')
  .querySelectorAll('ul.ranked-list li');
  
  for (let i = 0; i < lis.length; i++)
>>>>>>> 5a76c8149c69a95d14f6b2f6948d464b929f5266
  {
  rank[i].innerHTML =parseInt(rank[i].innerHTML)+n;
  }
  
}
 function deepestChild()
 {
<<<<<<< HEAD
   var  deep= document.getElementById('grand-node').querySelectorAll('div')
   var  deepest =deep[deep.length-1]
   return deepest
       //or // for(var i=0;i< deep.length;i++)
       //  {
       //  var deepest=deep[i]
       //}
      //return deepest
=======
   var doc= document.getElementById('grand-node')
    for(var i=0;i<doc.length;i++)
    {
      doc.querySelector(i)
    }
   return doc.innerHTML
>>>>>>> 5a76c8149c69a95d14f6b2f6948d464b929f5266
   
 }