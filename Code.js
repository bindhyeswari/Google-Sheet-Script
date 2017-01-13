function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .createMenu('Delivery Requirement Configuration')
      .addItem('Show Feature/Tier/Versions', 'showSidebar')
      .addToUi();
}

function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('Page')
      .setTitle('Configure Feature/Tier/Versions')
      .setWidth(300);
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .showSidebar(html);
}

function showModal() {
  console.log('Hello World!');
  var html = HtmlService.createHtmlOutput('<p>Lorem ispum!</p>')
      .setWidth(250)
     .setHeight(300);
 SpreadsheetApp.getUi().showModalDialog(html, 'My add-on');
}
