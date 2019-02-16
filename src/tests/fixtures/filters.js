import moment from 'moment'

const filters = {
   text: '',
   filterByName: 'all',
   filterByPlace: 'all',
   sort: 'ASC',
   startDate: null,
   endDate: null
}

const altFilters = {
   text: '',
   filterByName: 'Kylu',
   filterByPlace: 'Küche',
   sort: 'DESC',
   startDate: moment(0),
   endDate: moment(0).add(5, 'days')
}

export { filters, altFilters }