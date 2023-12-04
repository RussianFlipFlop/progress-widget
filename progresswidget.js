// Progress bar function
function createProgressBar(percentage, width) {
    const context = new DrawContext();
    context.size = new Size(width, 10);
  
    // Draw the background of the progress bar
    context.setFillColor(Color.white());
    const bgPath = new Path();
    bgPath.addRoundedRect(new Rect(0, 0, width, 10), 3, 3);
    context.addPath(bgPath);
    context.fillPath();
  
    // Draw the fill of the progress bar
    context.setFillColor(Color.black());
    const fillPath = new Path();
    const fillWidth = width * percentage;
    fillPath.addRoundedRect(new Rect(0, 0, fillWidth, 10), 3, 3);
    context.addPath(fillPath);
    context.fillPath();
  
    return context.getImage();
}
  
// Get current date information
const now = new Date();
const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
const startOfYear = new Date(now.getFullYear(), 0, 1);

const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
const endOfYear = new Date(now.getFullYear() + 1, 0, 1);

const msPerDay = 1000 * 60 * 60 * 24;
const msPerYear = msPerDay * 365;

// Calculate the progress
const dayProgress = (now - startOfDay) / (endOfDay - startOfDay);
const monthProgress = (now - startOfMonth) / (endOfMonth - startOfMonth);
const yearProgress = (now - startOfYear) / (endOfYear - startOfYear);

// Calculate life progress (assuming 80 years life span)
const estimatedLifeExpectancy = 80;
const birthYear = 2004; // Replace with the actual year of birth
const yearsLived = now.getFullYear() - birthYear;
const lifeProgress = yearsLived / estimatedLifeExpectancy;

// Create Widget
const widget = new ListWidget();
widget.backgroundColor = new Color("#ffffff");

// Day Progress Bar
//widget.addSpacer(10);
const dayProgressBar = createProgressBar(dayProgress, 300);
const dayStack = widget.addStack();
dayStack.centerAlignContent();
dayStack.addImage(dayProgressBar);
dayStack.addSpacer(5);
let dayf = dayStack.addText(`Day: ${Math.round(dayProgress * 100)}%`);
dayf.textColor = Color.black();

// Month Progress Bar
widget.addSpacer(10);
const monthProgressBar = createProgressBar(monthProgress, 300);
const monthStack = widget.addStack();
monthStack.centerAlignContent();
monthStack.addImage(monthProgressBar);
monthStack.addSpacer(5);
let monthf = monthStack.addText(`Month: ${Math.round(monthProgress * 100)}%`);
monthf.textColor = Color.black();

// Year Progress Bar
widget.addSpacer(10);
const yearProgressBar = createProgressBar(yearProgress, 300);
const yearStack = widget.addStack();
yearStack.centerAlignContent();
yearStack.addImage(yearProgressBar);
yearStack.addSpacer(5);
let yearf = yearStack.addText(`Year: ${Math.round(yearProgress * 100)}%`);
yearf.textColor = Color.black();

// Life Progress Bar
widget.addSpacer(10);
const lifeProgressBar = createProgressBar(lifeProgress, 300);
const lifeStack = widget.addStack();
lifeStack.centerAlignContent();
lifeStack.addImage(lifeProgressBar);
lifeStack.addSpacer(5);
let lifef = lifeStack.addText(`Life: ${Math.round(lifeProgress * 100)}%`);
lifef.textColor = Color.black();

// Finalize widget settings
Script.setWidget(widget);
Script.complete();
widget.presentSmall();
