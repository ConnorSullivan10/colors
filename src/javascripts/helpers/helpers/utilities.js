import $ from 'jquery';


const printToDom = (divId, textToPrint) => {
  // const selectedDiv = document.getElementByID(divID);
  // selectedDiv.innerHTML = textToPrint;
  $(`#${divId}`).html(textToPrint);
};

export default { printToDom };
