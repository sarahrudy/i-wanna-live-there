export const getAllCities = () => {
  return fetch(`https://softwhere-api.herokuapp.com/cities`)
    .then(response => checkError(response))
}

export const getSingleCity = (id) => {
  return fetch(`https://softwhere-api.herokuapp.com/cities/${id}`)
    .then(response => checkError(response))
}

export const checkError = (response) => {
  console.log(response)
  if (!response.ok) {
    throw new Error (
      `Sorry! ${response.status}: ${response.statusText}. Please try again!`
    )
  } else {
    return response.json()
  }
}
