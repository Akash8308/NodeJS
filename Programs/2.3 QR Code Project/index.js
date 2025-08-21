import fs from "fs";
import inquirer from "inquirer";
import qrimage from "qr-image";

runPrompt();

async function runPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "link",
        message: "Enter the URL to create QA code of:",
      },
    ])
    .then((answer) => {
      createQRCodeForLink(answer);
    });
}

function createQRCodeForLink(data) {
  var qr_svg = qrimage.image(data.link, { type: "svg" });
  qr_svg.pipe(fs.createWriteStream("QR_Code.svg"));
}
