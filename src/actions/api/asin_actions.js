import axios from 'axios'
axios.defaults.headers.common['Cookie'] = 'auth=eyJhbGciOiJIUzUxMiJ9.eyJ0eXAiOiJJRCIsImp0aSI6IjU4MWJiMWNlLTVkMDktNGU5ZC04MmY5LTg0OWNmMzYwMGQ5MSIsImF1ZCI6IjM2MHNlbGxlciIsInN1YiI6IjYyY2FkNjUyLWFhN2ItNGM0OS04OWMzLWU4ZDc1YmQwMmZkNSIsIm5hbWUiOiJmZXJuYW5kbyBndXRpZXJyZXoiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJmZXJuYW5kb2d1dGllcnJlejI3OUBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiZmVybmFuZG8iLCJmYW1pbHlfbmFtZSI6Imd1dGllcnJleiIsImVtYWlsIjoiZmVybmFuZG9ndXRpZXJyZXoyNzlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInJvbGVzIjpbImFkbWluIiwidXNlciJdfQ.uCRmOSNTHj-sLHE8YhSneFP1eAqsY0J-yENuMk38s4lqnqFiwolTGFSOp7HA-jbTzNT54MjwPW45GT4GZOT9iA';

module.exports = {
  getAsinID(asin) {
     return ''
  },

  getAsins(dateRange){
      return axios.get('https://qa.goja.io/fba/myasin',
          {
              params: {
                  startDate: '2019-01-01',
                  endDate: '2019-12-31'
              }
          })
          .then(response => {
              console.log(response.data)
          })
          .catch(error => {
              console.log(error)
          });
  },

  removeAsin(asinID){
      // {{HOST}}/myasin
      // body=[{"id":6}]
  }

};
