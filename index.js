
const randomColor = () => { 
  const rValue = Math.floor(Math.random() * 256);
  const gValue = Math.floor(Math.random() * 256);
  const bValue = Math.floor(Math.random() * 256);

  return `rgb(${rValue}, ${gValue}, ${bValue})`;
}

const showMessage = (correctNumberChildren, numberOfChildren) => {
  const messageContainer = document.getElementById("message");
  messageContainer.textContent += `We only added ${correctNumberChildren} of the ${numberOfChildren}`;
}

const over = (e) => {
  window.timeout = window.setTimeout(() => {
    e.target.remove();
  }, 2000)
}

const left = () => {
  if (window.timeout) window.clearTimeout(window.timeout);
}

const drawContainer = (containerSize, childSize, numberOfChildren) => {
  const sizeSquare = containerSize / childSize;
  const correctNumberChildren = numberOfChildren > childSize ** 2 ? childSize ** 2 : numberOfChildren;;
  const container = document.getElementById('mainSquare');

  container.style.display = "grid";
  container.style.gridTemplate = `repeat(${childSize}, ${sizeSquare}px) / repeat(${childSize}, ${sizeSquare}px)`;
  container.style.width = `${containerSize}px`;
  container.style.height = `${containerSize}px`;
  container.style.border = "1px solid black";
  
  for (let i = 0; i < correctNumberChildren; i++) {
    const square = document.createElement("div");
    square.style.background = randomColor();
    square.onmouseover = (e) => e.target.style.background = randomColor();
    square.onmouseenter = over;
    square.onmouseleave = left;
    container.appendChild(square);
  }

  if (numberOfChildren > correctNumberChildren) showMessage(correctNumberChildren, numberOfChildren);
};

drawContainer(310, 10, 50);
