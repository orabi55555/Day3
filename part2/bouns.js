var op =Number( prompt("what do you want to calculate (1 for circle, 2 for triangle, 3 for square, 4 for rectangle, 5 for parallelogram, 6 for trapezium, 7 for ellipse)"));
var dim1,dim2,dim3,area;
const pi=Math.PI;
        switch(op){
            case 1:
             
                dim1=Number(prompt("Enter the radius"));
                area=dim1*dim1*pi;
    		document.write("The Area of circle =" +area);
            break;
            case 2:
                dim1=Number(prompt("Enter the height"));
                dim2=Number(prompt("Enter the base"));
                area=dim1*dim2*0.5;
    document.write("The Area of triangle  =" +area);

            break;
            case 3:
                dim1=Number(prompt("Enter side"));
                area=dim1*dim1
    document.write("The Area of square =" +area);
            break;
		case 4:
                        dim1=Number(prompt("Enter the length"));
                        dim2=Number(prompt("Enter the width"));
                        area=dim1*dim2;        
    document.write("The area of rectangle  ="+area); 
            break;
            case 5:
                dim1=Number(prompt("Enter the height"));
                dim2=Number(prompt("Enter the base"));
                area=dim1*dim2
    document.write("The area of parallelogram  ="+area); 
            break;
            case 6:
                dim1=Number(prompt("Enter the first side"));
                        dim2=Number(prompt("Enter the second side"));
                        dim3=Number(prompt("Enter the height"));
                        area=(0.5*dim1*dim2)+dim3;
    document.write("The area of trapezium ="+area); 
            break;
            case 7:
                dim1=Number(prompt("Enter the Minor axis"));
                dim2=Number(prompt("Enter the Major axis"));
                area=pi*0.5*0.5*dim1*dim2;
    document.write("The area of ellipse  =" +area); 
            break;


        }