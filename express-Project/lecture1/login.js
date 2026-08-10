
export function loginPage(){
  return `<form action="/submit" method="POST">
    
    <label for="username"> Username:</label>
    <input type="text" name="username">
    <input type="date" name='date'>
    <button type="submit" method="POST">Submit</button>
    </form>`;
}
