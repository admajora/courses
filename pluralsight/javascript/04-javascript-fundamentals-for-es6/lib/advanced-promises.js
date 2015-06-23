module.exports = {
  getOrder   : getOrder,
  getUser    : getUser,
  getCompany : getCompany,
  getCourse  : getCourse
};

///////////// Function Declaration
function getOrder( orderId ) {
  return Promise.resolve({ userId : 35 });
}

function getUser( userId ) {
  return Promise.resolve({ companyId : 18 });
}

function getCompany( companyId ) {
  return Promise.resolve({ name : 'Pluralsight' });
}

function getCourse( courseId ) {
  var courses = {
    1 : { name : 'Introduction to Cobol' },
    2 : { name : 'Yet another C# Course' },
    3 : { name : "How to make billions by blogging" }
  };

  return Promise.resolve( courses[ courseId ]);
}
