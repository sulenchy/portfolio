import React from 'react';
function App() {
  return (
      
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="" src={require('./profile.jpg')} alt="Display" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Blessing Krofegha
        </div>
        <p className="text-gray-700 text-base">
        Hello! I am a meticulous software engineer who loves using technology to be creative, innovative and solve real problems. I have 3+ years experience in software engineering. I love getting things better using code, making researches and automation (of processes, of business processes).<span></span>😜
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Software Engineer</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Writter</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Public Speaker</span>
      </div>
    </div>
  );
}
export default App;
