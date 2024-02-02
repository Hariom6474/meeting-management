let formFill = `<form id="user-form">
<h1>Register Meeting</h1>
<div class="msg"></div>
<div>
    <label for="name">Name:</label>
    <input type="text" id="name">
</div>
<div>
    <label for="email">Email:</label>
    <input type="text" id="email">
</div>
<input class="btn btn-primary" type="submit" value="Book onClick="bookSlot()">
</form>`;

function clickTwo(e) {
  e.preventDefault();
  const form = document.getElementById("form-filled");
  form.innerHTML = formFill;
}

function clickTwoThirty(e) {
  e.preventDefault();
  const form = document.getElementById("form-filled");
  form.innerHTML = formFill;
}

function clickThree(e) {
  e.preventDefault();
  const form = document.getElementById("form-filled");
  form.innerHTML = formFill;
}

function clickThreeThirty(e) {
  e.preventDefault();
  const form = document.getElementById("form-filled");
  form.innerHTML = formFill;
}

async function bookSlot(e) {
  e.preventDefault();
  let name = e.target.name.value;
  let email = e.target.email.value;
  let myObj = {
    name: name,
    email: email,
  };
  try {
    const add = await axios.post("http://localhost:5000/user", myObj);
    myObj = add.data;
    showUserOnScreen(myObj);
  } catch (err) {
    console.log(err);
  }
}

function showUserOnScreen(myObj) {}
