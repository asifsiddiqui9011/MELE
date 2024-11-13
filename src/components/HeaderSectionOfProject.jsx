import React from 'react';

const HeaderSectionOfProject = () => {
  return (
    <div className="text-center py-10 px-4">
      {/* Title Section with Decorative Elements */}
      <div className="  relative inline-block mb-4">
         <div className="section-title pt-2"> Our Projects</div>
       
      </div>

      {/* Subtitle Paragraph */}
      <p className="text-gray-700 text-sm lg:text-base max-w-3xl mx-auto mb-4 lg:mb-6 leading-relaxed mt-3">
        The objective of the IT company is to enable a large number of youth to
        take up industry-relevant skill training that will help them in securing
        a better livelihood. Here are some.
      </p>

      {/* Divider */}
      <div className="w-24 h-1 bg-blue-900 mx-auto animate-widen" />
    </div>
  );
};

export default HeaderSectionOfProject;
