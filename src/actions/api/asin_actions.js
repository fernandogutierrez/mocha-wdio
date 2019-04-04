import dateUtils from '../../support/utils/common_utilities';
import axios from 'axios'
axios.defaults.headers.common['Cookie'] = 'auth=eyJhbGciOiJIUzUxMiJ9.eyJ0eXAiOiJJRCIsImp0aSI6IjU4MWJiMWNlLTVkMDktNGU5ZC04MmY5LTg0OWNmMzYwMGQ5MSIsImF1ZCI6IjM2MHNlbGxlciIsInN1YiI6IjYyY2FkNjUyLWFhN2ItNGM0OS04OWMzLWU4ZDc1YmQwMmZkNSIsIm5hbWUiOiJmZXJuYW5kbyBndXRpZXJyZXoiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJmZXJuYW5kb2d1dGllcnJlejI3OUBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiZmVybmFuZG8iLCJmYW1pbHlfbmFtZSI6Imd1dGllcnJleiIsImVtYWlsIjoiZmVybmFuZG9ndXRpZXJyZXoyNzlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInJvbGVzIjpbImFkbWluIiwidXNlciJdfQ.uCRmOSNTHj-sLHE8YhSneFP1eAqsY0J-yENuMk38s4lqnqFiwolTGFSOp7HA-jbTzNT54MjwPW45GT4GZOT9iA';
axios.defaults.baseURL = 'https://qa.goja.io/fba';


module.exports = {

  getAsins(dateRange){
      return axios.get('/myasin',
          {
              params: {
                  startDate: dateRange.start,
                  endDate: dateRange.end
              }
          })
          .then(response => {
              return response.data;
          })
          .catch(error => {
              return error
          });
  },

  async removeAllAsinsFromToday(){
      let asinsList = await this.getAsins({start: dateUtils.getCurrDate(),
                                                    end: dateUtils.getCurrDate()
      });

      if(Array.isArray(asinsList)){
          await asinsList.forEach( currAsin =>{
              axios.delete('/myasin', { data: [{"id": currAsin.id }] })
                   .then((response) => { })
                   .catch((error) => { })
          })
      }
  }
};
