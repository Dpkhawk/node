fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res=>
  {
    console.log('welcome');
    return res.json()
  }
    // { return res.json(console.log('welcome')) }

)
.then(data=>console.log(data))

function Callfetch() {
    return new Promise((resolve, reject) => {
      resolve(fetch("https://jsonplaceholder.typicode.com/todos/1"));
    });
  }
  Callfetch()
    .then((response) => response.json())
    .then((response) => console.log(response.userId))
    .catch((message) => console.log(message));
async function call() {
    const response = await Callfetch();
    const data = await response.json();
    const id = data.userId;
    console.log(id);
  }
  call();hil