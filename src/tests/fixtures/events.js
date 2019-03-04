import moment from 'moment'

const events = [
   {
      id: '0',
      cleaner: 'Kylu',
      place: 'Bad',
      note: 'Alles sauber gemacht',
      createdAt: moment(0).valueOf(),
      cleanedAt: moment(0).valueOf(),
      comments: [{
            id: '1',
            createdAt: 125,
            commentBody: 'this is my comment',
            commenter: 'Kylu'
         },{
            id: '2',
            createdAt: 130,
            commentBody: 'this is my another comment',
            commenter: 'Chris'
         }
      ]
   },
   {
      id: '1',
      cleaner: 'Alex',
      place: 'Küche',
      note: 'Alles sauber gemacht',
      createdAt: moment(0).subtract(40, 'days').valueOf(),
      cleanedAt: moment(0).subtract(40, 'days').valueOf(),
      comments: [{
            id: '1',
            createdAt: 125,
            commentBody: 'this is my comment',
            commenter: 'Kylu'
         },{
            id: '2',
            createdAt: 130,
            commentBody: 'this is my another comment',
            commenter: 'Chris'
         }
      ]
   },
   {
      id: '2',
      cleaner: 'Till',
      place: 'Flur',
      note: 'Alles sauber gemacht',
      createdAt: moment(0).add(40, 'days').valueOf(),
      cleanedAt: moment(0).add(40, 'days').valueOf()
   },
]

export default events