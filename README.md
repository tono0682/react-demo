# React Demo Application
This project is a demonstration of a web page built using React. The aim of the task is to demonstrate knowledge of basic react skills and responsive design. 

**Link to project:** 
[Live Link](https://vercel.com/tono0682/react-demo/FJYMoqB6TRbTg6WSsA6ZjxdKp3bU)

![Application Screenshot](/Document/react-demo-screenshot.png)

## How It's Made:

**Tech used:** React, TypeScript, CSS, Vite,

For this project, I utilised React along with CSS and TypeScript. I structured the project using components such as Card, CardImage, CardHeader, CardBody, and Button to maintain modularity and reusability. Each component was crafted to mimic the provided design, paying attention to details such as padding, border radius, box shadow, overlays, and alignment.

The project is responsive and adjusts its layout for both desktop and mobile devices. On mobile devices, the cards maintain a single row as specified in the requirements.

To manage state, I implemented a simple state management system where the border around the cards changes based on user interaction. Initially, the middle card has a border on load. Clicking on a card's button switches the border to the clicked card while ensuring that the middle card always has the border on load.

## Challenges and Lessons Learned:

One of the major challenges I encountered during the development process was maintaining all cards in a single row for lower screen widths, particularly around mobile usage. With varying amounts of text content within each card, achieving a clean design while keeping all cards on one row proved to be quite challenging.

To address this challenge, I explored various solutions and eventually implemented a method to truncate the text and limit the number of lines rendered using CSS. By applying styles such as white-space: pre-wrap, overflow: hidden, and text-overflow: ellipsis, along with the -webkit-line-clamp property, I was able to control the display of text content within the cards while indicating the presence of additional text with a trailing ellipsis.

```
@media (max-width: 640px) {
    .card-text p {
        white-space: pre-wrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 7; 
        -webkit-box-orient: vertical;
    }
}
```
![Truncate Text Screenshot](/Document/truncate-text-screenshot.png)


