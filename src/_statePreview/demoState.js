

const demoState = {
   settings: {
      wgName: 'Greifswalder',
      places: ['Küche', 'Bad', 'Flur'],
      cleaners: ['Kylu', 'Alex', 'Till', 'Chris'],
      createdAt: moment('2018-12-01'),
      notifications: {
         event: {
            afterDelete: 'The cleaning was successfully removed',
            notFound: "The cleaning doesn't exist or has been removed"
         },
         comment: {
            validate: 'Please add your comment'
         }
      }
   },
   filters: {
      text: '',
      filterByName: 'all',
      filterByPlace: 'all',
      sort: 'DESC',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
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
