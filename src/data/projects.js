const projects = [
  {
    title: "Personal Finance Tracker",
    description:
      "A desktop application designed to help users manage their personal finances by tracking income and expenses, setting custom monthly budgets, and generating clear, interactive reports. Features include visual breakdowns by category, and smart alerts when spending nears set limits.",
    tech: ["C#", ".NET", "SQL"],
    github: "https://github.com/IfhaamZ/PersonalFinanceTrackerApp.git",
    image: "/images/PFT.png",
    linkType: "github",
  },
  {
    title: "Library Management App",
    description:
      "A full-stack library system where users can browse available books, borrow and return them, and automatically incur penalty fees for late returns. Includes features like real-time book availability, borrowing history, and admin controls for managing inventory and charges.",
    tech: ["ReactJS", "Java", "SpringBoot", "SQL"],
    github: "https://github.com/IfhaamZ/FullStack-Library-App.git",
    image: "/images/LMA.png",
    linkType: "github",
  },
  {
    title: "Restaurant Booking & Management App",
    description:
      "A restaurant application that allows users to browse menus, make table reservations, manage bookings, and view reservation history. Includes real-time table availability, confirmation notifications, and admin features for managing menus and seating.",
    tech: ["Java", "JSP", "MySQL", "Azure", "Maven"],
    github: "https://github.com/IfhaamZ/RestaurantApp.git",
    image: "/images/RMA.png",
    linkType: "github",
  },
  {
    title: "House Price Prediction: Linear Regression",
    description:
      "This project compares three regression models, simple linear regression, multiple linear regression, and regularized regression to predict house prices. It involves comprehensive data preprocessing, cross-validation, residual analysis, and model evaluation. ",
    tech: ["Python", "Pandas", "Numpy", "Sklearn"],
    github:
      "https://colab.research.google.com/drive/1fFYO8VA9qbr-5fRucSOCkbUKOWaKzQVa",
    image: "/images/HPP.png",
    linkType: "colab",
  },
  {
    title: "Car Rentals Website",
    description:
      "A full-featured car rental platform that allows users to browse available vehicles, book cars for specific dates, and manage reservations seamlessly. The app supports authentication, real-time vehicle availability tracking, and dynamic pricing based on rental duration",
    tech: ["PHP", "JavaScript", "AWS"],
    github: "https://github.com/IfhaamZ/CarRental.git",
    image: "/images/CRW.png",
    linkType: "github",
  },
  {
    title: "IoT Marketplace & Management Platform",
    description:
      "A dual-role application designed for both customers and staff. Customers can browse and purchase a range of IoT devices, while staff  manage inventory, process orders, and update product details. The platform features secure authentication, order history tracking, and access control. ",
    tech: ["Java", "JavaScript", "JSP", "MySQL", "Maven"],
    github: "https://github.com/IfhaamZ/IoT_Bay.git",
    image: "/images/IOT.png",
    linkType: "github",
  },
  {
    title: "Fake News Classifier",
    description:
      "An app that detects fake news in real-time using article headlines or content. The app compares the performance of 3 different models — Logistic Regression, SVM, and BERT-based embeddings. It provides instant predictions and confidence scores, to highlight accuracy and reliability. ",
    tech: ["Python", "Pandas", "Sklearn", "Seaborn"],
    github:
      "https://colab.research.google.com/drive/1Zgx9q50UeDHpIS8KjJdv0gx3RMLysYyM",
    image: "/images/FND.png",
    linkType: "colab",
    demo: "https://fakenewsdetector-zmeo3wgwdqexnkrmfsb7hl.streamlit.app/",
  },
];

export default projects;
