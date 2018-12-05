

const demoState = {
   settings: {
      wgName: 'Greifswalder',
      places: ['All', 'Küche', 'Bad', 'Flur'],
      cleaners: ['All', 'Kylu', 'Alex', 'Till', 'Chris'],
   },
   filters: {
      text: '',
      filterByName: 'Kylu',
      filterByPlace: 'Küche',
      sort: 'ASC',
      startDate: '',
      endDate: ''
   },
   events: [
      {
         cleaner: 'Kylu',
         place: 'Bad',
         id: 'iwuef8768',
         note: 'Alles sauber gemacht',
         createdAt: 124,
         cleanedAt: 20,
         comments: [{
               id: '092873e2iuh',
               createdAt: 125,
               commentBody: 'this is my comment',
               commenter: 'Kylu'
            },{
               id: '092873e2iuhdweefr',
               createdAt: 130,
               commentBody: 'this is my another comment',
               commenter: 'Chris'
            }
         ]
      },
      {
         cleaner: 'Till',
         place: 'Küche',
         id: 'iwuef8346grth',
         note: 'Alles ausser Boden',
         createdAt: 124,
         cleanedAt: 20
      }
   ]
}
