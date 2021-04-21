let country = document.getElementById('country')

let myCountry = {
  'Select a country': [],
  Kyrgyzstan: ['select city', 'Bishkek', 'Karakol', 'Osh', 'Jalal-Abad', 'Balykchy', 'Batken', 'Cholpon-Ata', 'Tokmok'],
  USA: ['select city', 'New York City', 'Los Angeles', 'Chicago', 'San Diego', 'San Antonio', 'Las Vegas'],
  "Great Britain": ['select city', 'Edinburgh', 'London', 'Liverpool', 'Batch', 'Oxford', 'Cambridge'],
  China: ['select city', "Shanghai', 'Xi'an", 'Suzhou', 'Hong Kong', 'Hangzhou'],
  Japan: ['select city', 'Tokyo', 'Kyoto', 'Osaka', 'Yokahama', 'Nagoya', 'Kobe'],
  Australia: ['select city', 'Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Wollongong'],
  Turkey: ['select city', 'Istanbul', 'Antalya', 'Sanliurfa', 'Izmir', 'Konya', 'Fethiye', 'Eskisehir'],
  Canada: ['select city', 'Ottawa', 'Toronto', 'Quebec City', 'Vancouver', 'Calgary', 'Whitehorse', 'Banff'],

}
 
for (const key in myCountry) {
  const option = document.createElement('option')
  option.innerHTML = key
  country.appendChild(option)
  
}

let city = document.querySelector('.city')

country.addEventListener('change', (event) => {
  city.textContent = ' '

  for (const key2 in myCountry[event.target.value]) {
    const option2 = document.createElement('option')
    option2.innerText = myCountry[event.target.value][key2]
    city.appendChild(option2) 
  }
})

let text = document.getElementById('text')

city.addEventListener('change', (event)=> {
  let cityy = event.target.value
  let cityResult = country.value;
  text.innerText = cityResult + ',' + '  ' + cityy
})

