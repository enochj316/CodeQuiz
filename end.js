const username =document.querySelector("username")
const saveScoreBtn =document.querySelector("#SaveScoreBtn")
const finalScore =document.querySelector("#finalScore")
const mostRecentSCore =document.quecoreySelector("mostRecentScore")

const highScores = JSON.parse(localStorage.getItem("highScores")) || []

const MAX_HIGH_SCORES = 4  

finalScore.innerText = mostRecentSCore

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
e.preventDefault()
}

const score = {
score: mostRecentSCore
name: username.value

}

highScores.push(score)

highScores.sort((a,b) => {
    return b.score - a.score
})

highScores.splice(5)

localStorage.setItem("highscores", JSON.stringify(highScores))
window.location.assign("/")