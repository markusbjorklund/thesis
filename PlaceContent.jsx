// Folder and subfolders for example files
var folder = "C:/Users/markus.bjorklund/Desktop/thesis/Files/Automation/";
var subfolder_1 = "Comics/";
var subfolder_2 = "TV/";
var subfolder_3 = "Weather/";

// Filetype 
var filetype = ".jpg";

// Keeping the code/script as small as possible all the files in this example will have a static name. These files will be placed on three different pages. 
/*
The files are named as follows:

Parent page 1 (One placeholder)
- TV_schedule_1

Parent page 2 (Seven placeholders)
- TV_schedule_2
- Comic_1
- Comic_2
- Comic_3
- Comic_4
- Comic_5
- Comic_6

Parent page 3 (Four placeholders)
- Weather_map
- Comic_7
- Comic_8
- Comic_9
*/

// Parent page 1 (One placeholder)
if (app.documents[0].pageItems.itemByName("TV_schedule_1").isValid && app.activeDocument.links.itemByName("Dummy_TV_schedule_1.jpg").isValid) {
  var TV_schedule_1 = app.activeDocument.links.itemByName("Dummy_TV_schedule_1.jpg").parent;
  var TV_schedule_1_file = new File(folder + subfolder_2 + "TV_schedule_1" + filetype);
  try {
    TV_schedule_1.place(TV_schedule_1_file);
  }
  catch (e) {
    alert("No such file!");
  }
}

// Parent page 2 (Seven placeholders)
if (app.documents[0].pageItems.itemByName("TV_schedule_2").isValid && app.activeDocument.links.itemByName("Dummy_TV_schedule_2.jpg").isValid) {
  var TV_schedule_2 = app.activeDocument.links.itemByName("Dummy_TV_schedule_2.jpg").parent;
  var TV_schedule_2_file = new File(folder + subfolder_2 + "TV_schedule_2" + filetype);
  try {
    TV_schedule_2.place(TV_schedule_2_file);
  }
  catch (e) {
    alert("No such file!");
  }
}
if (app.documents[0].pageItems.itemByName("Comic_1").isValid && app.activeDocument.links.itemByName("Dummy_Comic_1.jpg").isValid) {
  var Comic_1 = app.activeDocument.links.itemByName("Dummy_Comic_1.jpg").parent;
  var Comic_1_file = new File(folder + subfolder_1 + "Comic_1" + filetype);
  try {
    Comic_1.place(Comic_1_file);
  }
  catch (e) {
    alert("No such file!");
  }
}
if (app.documents[0].pageItems.itemByName("Comic_2").isValid && app.activeDocument.links.itemByName("Dummy_Comic_2.jpg").isValid) {
  var Comic_2 = app.activeDocument.links.itemByName("Dummy_Comic_2.jpg").parent;
  var Comic_2_file = new File(folder + subfolder_1 + "Comic_2" + filetype);
  try {
    Comic_2.place(Comic_2_file);
  }
  catch (e) {
    alert("No such file!");
  }
}
if (app.documents[0].pageItems.itemByName("Comic_3").isValid && app.activeDocument.links.itemByName("Dummy_Comic_3.jpg").isValid) {
  var Comic_3 = app.activeDocument.links.itemByName("Dummy_Comic_3.jpg").parent;
  var Comic_3_file = new File(folder + subfolder_1 + "Comic_3" + filetype);
  try {
    Comic_3.place(Comic_3_file);
  }
  catch (e) {
    alert("No such file!");
  }
}
if (app.documents[0].pageItems.itemByName("Comic_4").isValid && app.activeDocument.links.itemByName("Dummy_Comic_4.jpg").isValid) {
  var Comic_4 = app.activeDocument.links.itemByName("Dummy_Comic_4.jpg").parent;
  var Comic_4_file = new File(folder + subfolder_1 + "Comic_4" + filetype);
  try {
    Comic_4.place(Comic_4_file);
  }
  catch (e) {
    alert("No such file!");
  }
}
if (app.documents[0].pageItems.itemByName("Comic_5").isValid && app.activeDocument.links.itemByName("Dummy_Comic_5.jpg").isValid) {
  var Comic_5 = app.activeDocument.links.itemByName("Dummy_Comic_5.jpg").parent;
  var Comic_5_file = new File(folder + subfolder_1 + "Comic_5" + filetype);
  try {
    Comic_5.place(Comic_5_file);
  }
  catch (e) {
    alert("No such file!");
  }
}
if (app.documents[0].pageItems.itemByName("Comic_6").isValid && app.activeDocument.links.itemByName("Dummy_Comic_6.jpg").isValid) {
  var Comic_6 = app.activeDocument.links.itemByName("Dummy_Comic_6.jpg").parent;
  var Comic_6_file = new File(folder + subfolder_1 + "Comic_6" + filetype);
  try {
    Comic_6.place(Comic_6_file);
  }
  catch (e) {
    alert("No such file!");
  }
}

// Parent page 3 (Four placeholders)
if (app.documents[0].pageItems.itemByName("Weather_map").isValid && app.activeDocument.links.itemByName("Dummy_Weather_map.jpg").isValid) {
  var Weather_map = app.activeDocument.links.itemByName("Dummy_Weather_map.jpg").parent;
  var Weather_map_file = new File(folder + subfolder_3 + "Weather_map" + filetype);
  try {
    Weather_map.place(Weather_map_file);
  }
  catch (e) {
    alert("No such file!");
  }
}
if (app.documents[0].pageItems.itemByName("Comic_7").isValid && app.activeDocument.links.itemByName("Dummy_Comic_7.jpg").isValid) {
  var Comic_7 = app.activeDocument.links.itemByName("Dummy_Comic_7.jpg").parent;
  var Comic_7_file = new File(folder + subfolder_1 + "Comic_7" + filetype);
  try {
    Comic_7.place(Comic_7_file);
  }
  catch (e) {
    alert("No such file!");
  }
}
if (app.documents[0].pageItems.itemByName("Comic_8").isValid && app.activeDocument.links.itemByName("Dummy_Comic_8.jpg").isValid) {
  var Comic_8 = app.activeDocument.links.itemByName("Dummy_Comic_8.jpg").parent;
  var Comic_8_file = new File(folder + subfolder_1 + "Comic_8" + filetype);
  try {
    Comic_8.place(Comic_8_file);
  }
  catch (e) {
    alert("No such file!");
  }
}
if (app.documents[0].pageItems.itemByName("Comic_9").isValid && app.activeDocument.links.itemByName("Dummy_Comic_9.jpg").isValid) {
  var Comic_9 = app.activeDocument.links.itemByName("Dummy_Comic_9.jpg").parent;
  var Comic_9_file = new File(folder + subfolder_1 + "Comic_9" + filetype);
  try {
    Comic_9.place(Comic_9_file);
  }
  catch (e) {
    alert("No such file!");
  }
}
