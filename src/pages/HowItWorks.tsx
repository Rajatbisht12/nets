import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Choose a Celebrity',
      description: 'Browse through our diverse roster of celebrities from entertainment, sports, music, and more.',
      icon: (
        <svg className="w-12 h-12 mx-auto text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Select a Service',
      description: 'Choose from personalized video messages, direct messages, or virtual meet & greets.',
      icon: (
        <svg className="w-12 h-12 mx-auto text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Personalize Your Request',
      description: 'Provide details about your occasion, special instructions, and what youd like the celebrity to say or discuss.',
      icon: (
        <svg className="w-12 h-12 mx-auto text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Receive Your Personalized Experience',
      description: 'Get your video message, chat with your chosen celebrity, or join your scheduled meet & greet.',
      icon: (
        <svg className="w-12 h-12 mx-auto text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  return (
    <section className="section bg-gray-100">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get your personalized celebrity experience in four simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.id} className="bg-white rounded-xl p-6 shadow-md relative">
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                {step.id}
              </div>
              {step.icon}
              <h3 className="text-xl font-bold mb-3 mt-4 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
              
              {/* Connector line for all but the last item */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-purple-600"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="bg-purple-100 rounded-xl p-8 shadow-md max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0">
              <svg className="w-20 h-20 mx-auto text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="md:w-3/4 md:pl-6">
              <h3 className="text-xl font-bold mb-2">Fast Turnaround Times</h3>
              <p className="text-gray-700">Most video messages are delivered within 2-5 days, though times may vary by celebrity. Direct messages typically receive a response within 48 hours, and meet & greets are scheduled based on the celebrity's availability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;