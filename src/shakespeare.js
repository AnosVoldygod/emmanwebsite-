export function getInsultOne() {
  return fetch('/InsultTextFiles/InsultOne.txt')
    .then((response) => response.text())
    .then((data) => {
      const insultArrayOne = data.split('\n').filter((line) => line.trim() !== '')
      return insultArrayOne[Math.floor(Math.random() * insultArrayOne.length)]
    })
    .catch((error) => {
      console.error(error)
      return ''
    })
}

export function getInsultTwo() {
  return fetch('/InsultTextFiles/InsultTwo.txt')
    .then((response) => response.text())
    .then((data) => {
      const insultArrayTwo = data.split('\n').filter((line) => line.trim() !== '')
      return insultArrayTwo[Math.floor(Math.random() * insultArrayTwo.length)]
    })
    .catch((error) => {
      console.error(error)
      return ''
    })
}

export function getInsultThree() {
  return fetch('/InsultTextFiles/InsultThree.txt')
    .then((response) => response.text())
    .then((data) => {
      const insultArrayThree = data.split('\n').filter((line) => line.trim() !== '')
      return insultArrayThree[Math.floor(Math.random() * insultArrayThree.length)]
    })
    .catch((error) => {
      console.error(error)
      return ''
    })
}

export function getPreInsult() {
  return fetch('/InsultTextFiles/PreInsult.txt')
    .then((response) => response.text())
    .then((data) => {
      const preInsultArray = data.split('\n').filter((line) => line.trim() !== '')
      return preInsultArray[Math.floor(Math.random() * preInsultArray.length)]
    })
    .catch((error) => {
      console.error(error)
      return ''
    })
}

export async function fullInsult() {
  try {
    const pre = await getPreInsult()
    const insult1 = await getInsultOne()
    const insult2 = await getInsultTwo()
    const insult3 = await getInsultThree()

    const fullInsultString = `${pre} ${insult1} ${insult2} ${insult3}`
    console.log(fullInsultString)
    return fullInsultString
  } catch (error) {
    console.error('Error generating full insult:', error)
    return ''
  }
}
