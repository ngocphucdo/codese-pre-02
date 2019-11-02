//
const fs = require("fs");

fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(typeof data);

    let objData = JSON.parse(data);
    console.log(typeof objData);
    for (let index = 0; index < objData.length; index++) {
      // console.log(objData[index]);
      let count = 0;
      for (let j = 0; j < objData[index].questionAnswer.length; j++) {
        if (objData[index].questionAnswer[j] == "no") {
          count++;
        }
      }
      // console.log(count);
      if (count > 3) {
        console.log("id cua cau hoi: ", objData[index].id);
      }
    }
  }
});
