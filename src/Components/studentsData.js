const studentsData = {
  "students": [
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "experience": "I have been working as a software developer for 2 years, primarily using JavaScript and React.",
      "hobbies": ["Reading books in the park", "Playing Guitar in a band"],
      "behavior": 8,
      "communication": 9,
      "situation_handling": 7,
      "total_marks": 80,
      "introduction": "Hi, I'm John Doe. I have been working as a software developer for 2 years, primarily using JavaScript and React. My hobbies include reading books in the park and playing guitar in a band. I consider myself to have good behavior and communication skills. I'm confident in handling various situations effectively.",
      "about": "John is a dedicated software developer with a passion for creating innovative solutions using JavaScript and React. He enjoys spending his free time reading and playing guitar.",
      "image": "https://evolve2023.in/wp-content/uploads/2014/10/speaker-3.jpg",
      "interview_questions": {
        "react": "Explain the concept of virtual DOM in React.",
        "html": "What are the semantic elements in HTML5 and how are they useful?",
        "css": "Explain the box model in CSS and how does it work?",
        "about_myself": "Tell me about yourself and your journey into software development.",
        "frontend_frameworks": "What are the differences between React and Angular?"
      }
    },
    {
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "experience": "In my 1.5 years in marketing, I've primarily worked with JavaScript and React, gaining valuable insights into consumer behavior.",
      "hobbies": ["Painting landscapes", "Hiking in the mountains"],
      "behavior": 7,
      "communication": 8,
      "situation_handling": 9,
      "total_marks": 80,
      "introduction": "Hello, I'm Jane Smith. In my 1.5 years in marketing, I've primarily worked with JavaScript and React, gaining valuable insights into consumer behavior. In my free time, I enjoy painting landscapes and hiking in the mountains. I'm known for my positive behavior and effective communication skills. I excel in handling challenging situations with ease.",
      "about": "Jane is a dynamic marketer with a flair for understanding consumer behavior. She loves expressing her creativity through painting and enjoys outdoor adventures like hiking.",
      "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "interview_questions": {
        "react": "What are React hooks and how do they differ from class components?",
        "html": "What is the purpose of the 'alt' attribute in HTML images?",
        "css": "Explain the difference between 'display: none;' and 'visibility: hidden;' in CSS.",
        "about_myself": "Can you walk me through your experience with React and how you've applied it in your work?",
        "frontend_frameworks": "Compare and contrast Vue.js and React in terms of their features and performance."
      }
    },
    {
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "experience": "With 3 years of experience in graphic design, I've honed my skills in JavaScript and React, creating visually stunning interfaces.",
      "hobbies": ["Capturing moments through photography", "Experimenting with new recipes in the kitchen"],
      "behavior": 6,
      "communication": 6,
      "situation_handling": 6,
      "total_marks": 60,
      "introduction": "Greetings! I'm Alice Johnson, a seasoned professional with 3 years of experience in graphic design. With 3 years of experience in graphic design, I've honed my skills in JavaScript and React, creating visually stunning interfaces. My hobbies include capturing moments through photography and experimenting with new recipes in the kitchen. I pride myself on my exceptional behavior and top-notch communication skills. I'm adept at handling various situations efficiently, ensuring smooth operations.",
      "about": "Alice is a creative graphic designer with a keen eye for detail. She finds joy in capturing beautiful moments through photography and loves to experiment with cooking.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR64lwF9gVewSJVvlbeEZgAASMTlNrQFCg4PsYds4EGCw&s",
      "interview_questions": {
        "react": "What are the key differences between state and props in React?",
        "html": "Explain the 'DOCTYPE' declaration in HTML5.",
        "css": "How does the 'float' property work in CSS and what are its drawbacks?",
        "about_myself": "What motivated you to pursue a career in graphic design and how does it intersect with your work in JavaScript and React?",
        "frontend_frameworks": "What are the advantages of using a CSS preprocessor like Sass or Less in a project?"
      }
    },
    {
      "name": "David Brown",
      "email": "david.brown@example.com",
      "experience": "I have 2 years of experience in web development, focusing on JavaScript and React.",
      "hobbies": ["Playing soccer", "Reading novels"],
      "behavior": 8,
      "communication": 9,
      "situation_handling": 8,
      "total_marks": 83,
      "introduction": "Hello, I'm David Brown. I have 2 years of experience in web development, focusing on JavaScript and React. In my free time, I enjoy playing soccer and reading novels. I believe I possess good behavior, effective communication, and problem-solving skills. I strive to handle various situations with ease and efficiency.",
      "about": "David is a passionate web developer who enjoys playing soccer and diving into a good book in his spare time. He prides himself on his problem-solving skills and ability to adapt to different situations.",
      "image": "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "interview_questions": {
        "react": "What are the key features of React Router and how does it work?",
        "html": "What are the advantages of using 'data-' attributes in HTML?",
        "css": "Explain the difference between 'padding' and 'margin' in CSS.",
        "about_myself": "Can you share a challenging project you've worked on using React and how you overcame obstacles?",
        "frontend_frameworks": "What are the benefits of using a CSS framework like Bootstrap or Foundation?"
      }
    },
    {
      "name": "Emma Wilson",
      "email": "emma.wilson@example.com",
      "experience": "I've been a front-end developer for 3 years, specializing in JavaScript and React.",
      "hobbies": ["Painting", "Gardening"],
      "behavior": 7,
      "communication": 5,
      "situation_handling": 4,
      "total_marks": 53,
      "introduction": "Hi there! I'm Emma Wilson, a front-end developer with 3 years of experience, specializing in JavaScript and React. Painting and gardening are my passions outside of work. I'm known for my excellent behavior, strong communication skills, and ability to handle various situations with ease.",
      "about": "Emma is a talented front-end developer who finds solace in painting and gardening. Her dedication to her craft is reflected in her excellent behavior and strong communication skills.",
      "image": "https://media.licdn.com/dms/image/C5603AQEI7H8mexaN5w/profile-displayphoto-shrink_800_800/0/1624389491976?e=2147483647&v=beta&t=HDQ2gGCEDXUYM5lYnmE7WTorSzELq0ESqLkUj-hO3ZI",
      "interview_questions": {
        "react": "What are the differences between functional components and class components in React?",
        "html": "What is the 'meta' tag used for in HTML?",
        "css": "How does the 'z-index' property work in CSS and what is its significance?",
        "about_myself": "What inspired you to pursue a career in front-end development and how have your hobbies influenced your work?",
        "frontend_frameworks": "Explain the concept of component-based architecture and its benefits in front-end development."
      }
    },
    {
      "name": "Michael Johnson",
      "email": "michael.johnson@example.com",
      "experience": "I have 1.5 years of experience as a software engineer, with a focus on JavaScript and React development.",
      "hobbies": ["Playing basketball", "Photography"],
      "behavior": 7,
      "communication": 8,
      "situation_handling": 7,
      "total_marks": 73,
      "introduction": "Hey, I'm Michael Johnson. I have 1.5 years of experience as a software engineer, with a focus on JavaScript and React development. Playing basketball and photography are my hobbies. I believe I possess decent behavior, good communication skills, and the ability to handle various situations effectively.",
      "about": "Michael is a software engineer with a knack for basketball and photography. Despite being relatively new to the field, he has demonstrated decent behavior and effective communication skills.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD2ue9SbS0H1zeLw6z2zyKIGMAUpgC_3JR7w&s",
      "interview_questions": {
        "react": "What is the purpose of 'shouldComponentUpdate' lifecycle method in React?",
        "html": "What are the differences between 'section' and 'div' elements in HTML5?",
        "css": "Explain the 'flexbox' layout model in CSS and its advantages.",
        "about_myself": "Can you discuss a recent project you worked on using React and any challenges you encountered?",
        "frontend_frameworks": "How do you ensure cross-browser compatibility when developing a website using React?"
      }
    },
    {
      "name": "Sophia Martinez",
      "email": "sophia.martinez@example.com",
      "experience": "I've been working in software development for 2 years, specializing in JavaScript and React.",
      "hobbies": ["Traveling", "Cooking"],
      "behavior": 9,
      "communication": 2,
      "situation_handling": 7,
      "total_marks": 60,
      "introduction": "Hi, I'm Sophia Martinez. I've been working in software development for 2 years, specializing in JavaScript and React. Traveling and cooking are my hobbies.",
      "about": "Sophia is a seasoned software developer who loves to travel and experiment with cooking. She excels in her field due to her strong communication skills and ability to handle various situations with ease.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyX-R6S_jfIBQ4QOb9TqelJK9vpieVFOna6LmKkJDhGA&s",
      "interview_questions": {
        "react": "What are the advantages of using React hooks over class components?",
        "html": "What is the purpose of the 'form' tag in HTML?",
        "css": "How can you center an element horizontally and vertically using CSS?",
        "about_myself": "Can you share a project where you had to collaborate with designers and how you integrated their designs into React components?",
        "frontend_frameworks": "What are the best practices for optimizing performance in a React application?"
      }
    }
  ]
}

  
  export default studentsData;
  