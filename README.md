# React Demo Application
This project is a demonstration of a web page built using React. The aim of the task is to demonstrate knowledge of basic react skills and responsive design. 

**Link to project:** 
[Live Link](https://react-demo-kappa-sandy.vercel.app/) 

![Application Screenshot](/Document/react-demo-screenshot.png)

## How It's Made:

**Tech used:** React, TypeScript, CSS, Vite,

For this project, I utilised React along with CSS and TypeScript. I structured the project using components such as Card, CardImage, CardHeader, CardBody, and Button to maintain modularity and reusability. Each component was crafted to mimic the provided design, paying attention to details such as padding, border radius, box shadow, overlays, and alignment.

The project is responsive and adjusts its layout for both desktop and mobile devices. On mobile devices, the cards maintain a single row as specified in the requirements.

To manage state, I implemented a simple state management system where the border around the cards changes based on user interaction. Initially, the middle card has a border on load. Clicking on a card's button switches the border to the clicked card while ensuring that the middle card always has the border on load.

## Requirements
1. We would like you to deploy the React page as a website. We would suggest using something quick like CodeSandbox, Vercel or Github pages. However, anyway you prefer to launch a website will be fine.

2. Build the Project using React (or Next JS)

3. Use SCSS (preferably) or CSS for the styling

4. Use of components, e.g, the card should be made with components such as Card, CardImage, CardHeader, CardBody, Button. Please do not use ANY component libraries or packages like MUI or ANT design. We want to see you are able to build these components yourself.

5. It should be responsive, and look good on desktop and mobile, the cards should be in a single row on mobile.

6. Card 3 needs to have 2 paragraphs of text in it so it's higher than the other cards

7. We are looking for attention to detail, padding, border radius, box shadow, overlays, alignment as per the design.

8. We want to see some sort of state management being used, we would suggest on the border. On load, the middle card should have a border, when you click a cards button, the border should switch to that card that was clicked, but always be on the middle card on load.

9. Push code to your Github, Gitlab or Bitbucket account so we can view the code

## Challenges and Lessons Learned:

One of the major challenges I encountered during the development process was the requirement to maintain all cards in a single row for lower screen widths, particularly around mobile usage.

> 5. It should be responsive, and look good on desktop and mobile, the cards should be in a single row on mobile.

With varying amounts of text content within each card, achieving a clean design while keeping all cards on one row proved to be quite challenging.

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

In this situation, I would usually reorganise the cards into a single column layout by changing the flex direction to column for smaller screen sizes. Another approach would be to grid-based layouts as an alternative solution. These approaches would enable us to maintain a wider width for the cards, facilitating a better fit for the required text content.
