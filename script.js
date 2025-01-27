const name1=document.getElementById("nm1");
const name2=document.getElementById("nm2");
const loveCal=document.getElementById("loveCal");
const loveValue=document.getElementById("loveValue");
const footer=document.getElementById("footer");


loveCal.addEventListener("click",()=>{

    let loveData;

    if(name1.value.trim().length<2 || name2.value.trim().length<2)
        {
            alert("Please enter valid names.");
        }
        else{
            loveData=Math.floor(Math.random()*100);
            loveValue.value=loveData+"%";
    
            // Clear previous content and add animation class
            footer.classList.remove("celebrate");
            footer.innerHTML = ""; // Clear previous content

            // Display a message based on the love percentage in the footer
            if(loveData<=10 || loveData<=50)
                {
                    footer.innerHTML = `<i class="fas fa-frown" style="color: #ff6f61;"></i> Good relationship`; // Sad face icon
                }
                else{
                    footer.innerHTML = `<i class="fas fa-heart" style="color: #ff6f61;"></i> Lovely relationship! ❤️ <br> Let's celebrate! 🎉`; // Heart icon with celebration message
                    
                    // Trigger confetti effect
                    confetti({
                        particleCount: 100,
                        spread: 70,
                        origin: { y: 0.6 }
                    });
                }
            
            // Add celebration animation
            footer.classList.add("celebrate");

            // Clear values after 3 seconds and reset footer message
            setTimeout(() => {
                loveValue.value="";
                footer.innerHTML="<p>Made with ❤️ by Shekh Faisal</p><p>Find out how much you love each other!</p>";
                footer.classList.remove("celebrate"); // Remove animation class
                name1.value="";
                name2.value="";
            }, 3000);
        }
    
});

