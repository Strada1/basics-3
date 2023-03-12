async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("готово!"), 1000)
    });
  
    let result = await promise; // будет ждать, пока промис не выполнится (*)
  
    console.log(1);

    console.log(result); // "готово!"

    console.log(2);
  }
  
  f();