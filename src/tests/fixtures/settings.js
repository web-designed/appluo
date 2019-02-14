const settings = {
   wgName: 'Greifswalder',
   places: ['All', 'Küche', 'Bad', 'Flur'],
   cleaners: ['All', 'Kylu', 'Alex', 'Till', 'Chris'],
   notifications: {
      event: {
         afterDelete: 'The cleaning was successfully removed',
         notFound: "The cleaning doesn't exist or has been removed"
      }
   }
}

export default settings