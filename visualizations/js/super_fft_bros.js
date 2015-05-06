var smb_can = $('#super_canvas_bros');

drawing = new Image();
drawing.src = "img/smb.png"; // can also be a remote URL e.g. http://
drawing.onload = function() {
    document.getElementById('super_canvas_bros').getContext('2d').drawImage(drawing,0,0);
};
