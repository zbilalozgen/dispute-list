import axios from 'axios'

const delay = (sec) => {
  return new Promise(resolve => {
    setTimeout(resolve, sec)
  })
}

const fetchDisputes = async url => {
  let res = await axios.get(url, {headers: {'Accept-Language': 'tr'}})
  let data = await res.data
  //Delay for spinner
  await delay(500)
  return data
}

export default fetchDisputes