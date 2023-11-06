const OUTPUT = document.querySelector(".output")
const KEY = "KsMM6ssh0kdJGeDQA34rW7XrhTs8uY3m"

fetch(`https://api.nytimes.com/svc/topstories/v2/food.json?api-key=${KEY}`)
    .then(function (response) {
        if (response.status !== 200)
            throw new Error("fejlbesked kig her")
        return response.json()
    })

    .then(function (data) {
      console.log(data)
      OUTPUT.innerText = results[0]
    })

    .catch(function (error) {

        console.log(error)
    })