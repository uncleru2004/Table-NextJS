export async function fetcher(value) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/" + value);

  if (!response.ok) throw new Error("fetch " + response.status);
  const result = await response.json();
  
  //console.log(result)
  return result;
}

