export default function form(){
  return `<form action="/submit" method="post">
  <label>Name </label>
    <input type="text">
    <br><br>
    <label>Password </label>
    <input type="password">
    <br><br>
    <button type="submit">SUMIT</button>

  </form>
  <a href='/'>GO BACK</a>`
};