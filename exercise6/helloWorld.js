const helloWorld = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("HelloWorld!");
        resolve();
      }, 2000);
    });
  };
  export default helloWorld;
  