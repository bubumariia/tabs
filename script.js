const array = [
    {name:"History",
    text:"I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up."},
    {name:"Vision",
    text:"Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal."},
    {name:"Goals",
    text:"Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones."}
]
const buttons = document.querySelectorAll(".buttons button")
const paragName = document.querySelector(".parag-name")
const parag = document.querySelector(".parag")
console.log(buttons)
buttons.forEach(button=>{
    button.addEventListener("click", ()=>{
        
        if(button.classList.contains("vision-btn")){
            paragName.innerHTML= array[1].name
            parag.innerText = array[1].text
            button.style.backgroundColor = "white"
            buttons[0].style.backgroundColor = "lightblue"
            buttons[2].style.backgroundColor = "lightblue"
            
        }else if(button.classList.contains("history-btn")){
            paragName.innerHTML= array[0].name
            parag.innerText = array[0].text
            button.style.backgroundColor = "white"
            buttons[1].style.backgroundColor = "lightblue"
            buttons[2].style.backgroundColor = "lightblue"
            
        }else{
            paragName.innerHTML= array[2].name
            parag.innerText = array[2].text
            button.style.backgroundColor = "white"
            buttons[0].style.backgroundColor = "lightblue"
            buttons[1].style.backgroundColor = "lightblue"
            
        }
    })
})


