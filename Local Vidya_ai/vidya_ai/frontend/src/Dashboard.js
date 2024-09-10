// Dashboard.js
import React from 'react';
import './Dashboard.css'; // Import the CSS file
import Sidebar from './Sidebar'; 

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <MainContent />
    </div>
  );
}


const MainContent = () => {
  return (
    <div className="main-content">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>
        <p className="mb-8">Navigate through the options to manage your learning experience with Vidya AI.</p>

        <Section 
          id="roadmap" 
          title="📅 Roadmap" 
          header="Your Learning Path"
          text="View and manage your personalized learning roadmap designed by our AI to help you reach your goals."
          buttonText="View Roadmap"
        />
        
        <Section 
          id="learn" 
          title="📚 Learn" 
          header="Start Learning"
          text="Access a wide range of courses and resources tailored to your interests and progress."
          buttonText="Start Learning"
        />

        <Section 
          id="test" 
          title="📝 Test" 
          header="Assess Your Knowledge"
          text="Take quizzes and exams to evaluate your understanding and track your progress."
          buttonText="Take a Test"
        />

        <Section 
          id="profile" 
          title="👤 Profile" 
          header="Your Profile"
          text="View and update your personal information, learning preferences, and achievements."
          buttonText="Edit Profile"
        />

        <Section 
          id="settings" 
          title="⚙️ Settings" 
          header="Account Settings"
          text="Manage your account settings, notifications, and preferences."
          buttonText="Go to Settings"
        />

        <Section 
          id="support" 
          title="💬 Support" 
          header="Need Help?"
          text="Get in touch with our support team for assistance with your account or learning journey."
          buttonText="Contact Support"
        />

        <Section 
          id="logout" 
          title="🚪 Logout" 
          header="Logout"
          text="Sign out of your account securely."
          buttonText="Logout"
          buttonClass="bg-red-500 hover:bg-red-600 text-white"
        />
      </div>
    </div>
  );
}

const Section = ({ id, title, header, text, buttonText, buttonClass = "bg-blue-500 hover:bg-blue-600 text-white" }) => {
  return (
    <div id={id} className="section-card">
      <div className="section-title">
        {title}
      </div>
      <div>
        <h5 className="section-header">{header}</h5>
        <p className="section-text">{text}</p>
        <a href="#" className={`section-button ${buttonClass}`}>{buttonText}</a>
      </div>
    </div>
  );
}

export default Dashboard;
