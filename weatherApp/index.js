(function(){
/* SEARCH BY USING A CITY NAME(BETUL), OR A COMMA-SEPARATED CITY NAME ALONG WITH THE COUNTRY CODE(India,IN) */
const form=document.querySelector(".top-banner form");
const input= document.querySelector(".top-banner input")
const msg=document.querySelector(".top-banner .msg")
const list=document.querySelector('.ajax-section .cities')
const API_KEY="2050b4a42d5dd1de31cad8e676f2a5c2"

form.addEventListener('submit', e=>{
    e.preventDefault()  
    let inputVal=input.value;

    //check if there's already a city
    const listItems=list.querySelectorAll(".ajax-section .city");
    const listItemsArray=Array.from(listItems)

    if(listItemsArray.length>0){
        const filteredArray=listItemsArray.filter(element=>{
            let content=""
            if(inputVal.includes(",")){
                //India,Inrrrrrr->invalid country code, so we keep only the first part of inputVal
                if(inputVal.split(""[1].length>2)){
                    inputVal=inputVal.split(",")[0]
                    content=element.querySelector(".city-name span").textContent.toLowerCase()
                }else content=element.querySelector(".city-name").dataset.name.toLowerCase()
            }else content=element.querySelector(".city-name span").textContent.toLowerCase()

        return content == inputVal.toLowerCase();
        })

        if(filteredArray.length>0){
            msg.textContent=`You already know the weather for ${
                filteredArray[0].querySelector(".city-name span").textContent
            }...otherwise be more specific by providing the code as well 😉`;
            form.reset()
            input.focus()
            return
        }
    }
      //ajax here
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${API_KEY}&units=metric`;

  fetch(url)
  .then(response=>response.json())
  .then(data=>{
    console.log('data',data)
    const {main, name, sys, weather}=data
    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;

      const li= document.createElement("li")
      li.classList.add("city")
      const markup=`
      <h2 class="city-name" data-name="${name},${sys.country}">
        <span>${name}</span>
        <sup>${sys.country}</sup>
      </h2>
      <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
      <figure>
        <img class="city-icon" src="${icon}" alt="${
      weather[0]["description"]
    }">
        <figcaption>${weather[0]["description"]}</figcaption>
      </figure>
    `;
    li.innerHTML = markup;
    list.appendChild(li);
  })
  .catch(() => {
    msg.textContent = "Please search for a valid city 😩";
  });

msg.textContent = "";
form.reset();
input.focus();

})

}());



