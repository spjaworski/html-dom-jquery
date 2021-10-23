document.addEventListener("DOMContentLoaded", function(){
    let friendBtn = document.createElement('button');
    let friendBtnText = document.createTextNode("2. Click me!");
    friendBtn.appendChild(friendBtnText);
    document.getElementById("colorChange").appendChild(friendBtn);

    friendBtn.addEventListener('click', function(){
        alert("You look nice today");
    })

    document.getElementById("alertBtn").addEventListener('click', function(){
        alert(document.getElementById("textAlert").value);
    })

    
    document.querySelector("div").addEventListener("mouseenter", function() {
            document.querySelector("div").style.background = 'red';
        }
    )

    document.querySelector("div").addEventListener("mouseleave", function() {
            document.querySelector("div").style.background = 'white';
        }
    )

    const randomColor = () => {
        let color = '#';
        for (let i = 0; i < 6; i++) {
           let random = Math.random();
           let bit = (random * 16) | 0;
           color += (bit).toString(16);
        };
        return color;
     }

    document.querySelector("p").addEventListener(
        "click", function() {
            document.querySelector("p").style.color = randomColor();
        }
    )

    document.getElementById("nameBtn").addEventListener('click', function(){
        let nameSpan = document.createElement('span');
        let nameText = document.createTextNode("Scott");
        nameSpan.append(nameText);
        document.getElementById("nameDiv").appendChild(nameSpan);
    })

    let friends = [
        "Sarah",
        "Alice",
        "Ben",
        "Dylan",
        "Nick",
        "Amanda",
        "Sarah B.",
        "Gretchen",
        "Hannah",
        "Gabby"
    ];

    document.getElementById("friendBtn").addEventListener('click', function() {
        for (i = 0; i < friends.length; i++) {
        let listComp = document.createElement('li');
        listComp.innerHTML = friends[i];
        document.getElementById("unorderedFriends").appendChild(listComp);
    }
    })
    

})