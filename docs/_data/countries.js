
export default async function() {
  
  const response = await fetch('https://timer.escuelait.com/api/countries');
  const data = await response.json();
  
  return data;
}