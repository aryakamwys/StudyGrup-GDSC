const myPromises = () => {
  const status = false;

  return new Promise((resolve, reject) => {
    if (status === true) {
      resolve({ message: "success", status });
    } else {
      reject({ message: "error", status });
    }
  });
};

myPromises()
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => console.log("Promises Selesai"))