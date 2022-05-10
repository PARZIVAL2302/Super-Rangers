

// Create canvas variable
var Canvas = new fabric.Canvas('my_canvas');
//done
 block_y=1
 block_x=1

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	// to upload images
	fabric.Image.fromURL(get_image, function(Img){
		block_image_object = Img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
        top:block_y,
		left:block_x
		});
		
		Canvas.add(block_image_object);
	})
	//done
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
			new_image('rr1.png');
			block_x = 20;
			console.log("You pressed R... Agni");
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image('gr.png');
		console.log("You pressed G... Juvenile ");
	}
	
	if(keyPressed == '89')
	{
		block_x =400;
		new_image('yr.png');
		console.log("You pressed Y... Happy ");
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image('pr.png');
		console.log("You pressed P... Amity ");
	}
	if(keyPressed == '66')
	{
		block_x = 800;
	    new_image('br.png');
		console.log("You pressed B... Aman");
	}
	
}

