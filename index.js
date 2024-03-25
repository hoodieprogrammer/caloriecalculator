const btn = document.getElementById("submit")


function onClick() {
   const select = document.getElementById("selector")
   const weightbox = document.getElementById("weightbox").value
   const heightbox = document.getElementById("heightbox").value

   const weightValue = Number(weightbox)
   const heightValue = Number(heightbox)

   console.log(weightValue, heightValue)
}

btn.addEventListener("click", () => onClick())

