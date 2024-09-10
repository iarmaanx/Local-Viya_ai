import React from 'react';


  

  function Sidebar(){
    return (
      <div className="sidebar">
        <h2 className="text-center text-2xl mb-6">Vidya AI</h2>
        <nav>
          <a href="#roadmap" className="sidebar-link">📅 Roadmap</a>
          <a href="#learn" className="sidebar-link">📚 Learn</a>
          <a href="#test" className="sidebar-link">📝 Test</a>
          <a href="#profile" className="sidebar-link">👤 Profile</a>
          <a href="#settings" className="sidebar-link">⚙️ Settings</a>
          <a href="#support" className="sidebar-link">💬 Support</a>
          <a href="login" className="sidebar-link">🚪 Logout</a>
        </nav>
  
        <div className="footer">
          <a href="aboutUs/" className="footer-link">Coded by Delta Developers</a>
        </div>
      </div>
    );
  }

export default Sidebar;

  