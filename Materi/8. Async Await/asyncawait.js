const data = [
  { id: 1, name: 'bar' },
  { id: 2, name: 'foo' },
  { id: 3, name: 'bar' }
]

const getDataById = (id) => {
  const getData = data.filter((data) => data.id === id)

  if (getData.length <= 0) {
    return new Error("Data Tidak Ditemukan").message
  }

  return getData[0]
}

const handleData = async () => {
  try {
    const data1 = await getDataById(1);
    console.log(data1);

    const data2 = await getDataById(2);
    console.log(data2);

    const data3 = await getDataById(3);
    console.log(data3);

    // Mencoba mengambil data yang tidak ada  
    const data4 = await getDataById(4);
    console.log(data4);
    
  } catch (err) {
    console.log(err);
  }
};

handleData()

