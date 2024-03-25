const btn = document.getElementById("submit")
const mainDiv = document.getElementById("box")

function BMR(a, g, w, h) {
   let bmr = 0
   if (g == "male") {
      bmr = 10*w + 6.25*h - 5*a + 5
   }
   if (g == "female") {
      bmr = 10*w + 6.25*h - 5*a - 161
   }
   bmr = Number(bmr)
   return bmr
}

function BMI(w, h) {
   h = h/100
   let H = h * h
   let bmi = Number((w/H) * 100)
   bmi = Math.floor(bmi)
   bmi /= 100
   return bmi
}

function status(BMI) {
   let status = "<font color='#00b515'>Healthy</font>"
   if (BMI < 18.5) {
      status = "<font color='#d3d609'>Underweight</font>"
   }
   if (BMI > 25) {
      status = "<font color='#d60909'>Overweight</font>"
   }

   return status
}

function onClick() {
   const select = document.getElementById("selector").value
   const weightbox = document.getElementById("weightbox").value
   const heightbox = document.getElementById("heightbox").value
   const agebox = document.getElementById("agebox").value
   
   const weightValue = Number(weightbox)
   const heightValue = Number(heightbox)
   const ageValue = Number(agebox)

   if (!weightValue || !heightValue || !ageValue) return

   const bmi = BMI(weightValue, heightValue)
   const bmr = BMR(ageValue, select, weightValue, heightValue)
   const stat = status(bmi)

   const bmitext = document.getElementById("bmi_label")
   const bmrtext = document.getElementById("bmr_label")
   bmrtext.innerHTML = `${bmr} calories`
   bmitext.innerHTML = `${bmi} | ${stat}`

   const results = document.getElementById('results')

   results.style.visibility = "visible"
}


btn.addEventListener("click", () => onClick())

