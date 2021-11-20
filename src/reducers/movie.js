const api1 = require('../utils/apilist/CONTENTLISTINGPAGE-PAGE1.json')

const movie = (state=api1.page.contentitems, action) => 
{
    switch (action.type)
    {
        default:
        return state
    }
  
}

export default movie;