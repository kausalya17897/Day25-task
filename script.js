document.body.innerHTML=`


<section class="user-list">

</section>
`;



async function getPopularAnime(){
    var data=await fetch(`https://animechan.vercel.app/api/quotes/anime?title=naruto&page=2`,{method:"GET"});
    const users=await data.json();
    const userContainer=document.querySelector(".user-list");
   
    userContainer.innerHTML="";
    var pic=document.createElement('img');
    userContainer.append(pic);
   
    users.forEach((a)=>{
        userContainer.innerHTML+=`
        <div class="user-container">
       <img src="https://dog.ceo/img/shop/tie-1.jpg" class="user-pic"/>
        <p class="user-name">Name:${a.anime}</p>
        <p class="user-character">Character:${a.character}</p>
        <p class="user-quote">Quote:${a.quote}</p>
</div>
        
        `;
    });
    

       
    console.log(users);
}
getPopularAnime();