module.exports = {
  getOrder   : getOrder,
  getUser    : getUser,
  getCompany : getCompany
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
