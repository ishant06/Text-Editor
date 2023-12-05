 var undoStack = [];
var redoStack = [];

function formatText(command, value = null) {
      document.execCommand(command, false, value);
        saveState();
}

function changeFontSize(size) {
    document.execCommand('fontSize', false, size);
    saveState();
}

function changeFontColor(color) {
    document.execCommand('foreColor', false, color);
    saveState();
}

function saveState() {
    var editorContent = document.getElementById('editor').innerHTML;
    undoStack.push(editorContent);
    // Clear redo stack whenever a new change is made
    redoStack = [];
}

function undo() {
    if (undoStack.length > 1) {
        redoStack.push(undoStack.pop());
        document.getElementById('editor').innerHTML = undoStack[undoStack.length - 1];
    }
}

function redo() {
    if (redoStack.length > 0) {
        undoStack.push(redoStack.pop());
        document.getElementById('editor').innerHTML = undoStack[undoStack.length - 1];
    }
}