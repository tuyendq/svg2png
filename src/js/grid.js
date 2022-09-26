var svgGrid = document.createElement('svg');
var gridWidth = 450;
// svgGrid.setAttribute('xmlns', 'https://www.w3.org/2000/svg')
// svgGrid.setAttribute('id','grid');

var lineGrid1 = document.createElement('line');
lineGrid1.setAttribute('x1', '0');
lineGrid1.setAttribute('y1', '0');
lineGrid1.setAttribute('x2', gridWidth);
lineGrid1.setAttribute('y2', '0');
lineGrid1.setAttribute('stroke', '#111');
svgGrid.appendChild(lineGrid1);

var lineGrid2 = document.createElement('line');
lineGrid2.setAttribute('x1', 0);
lineGrid2.setAttribute('y1', 0);
lineGrid2.setAttribute('x2', 0);
lineGrid2.setAttribute('y2', gridWidth);
lineGrid2.setAttribute('stroke', '#111');
svgGrid.appendChild(lineGrid2);



svgContainer = document.getElementById('container1');
svgContainer.appendChild(svgGrid);

// svgElement = document.getElementsByTagName('svg')[1];
// console.log(svgElement);
// document.getElementsByTagName('svg')[1].setAttribute('id', 'grid-line');
