export default function (state = {}, action) {
    switch (action.type) {
      case 'ADD_JOB_TO_FAVS':
        return {
          ...state,
          products: state.products.concat(action.payload),
        }
      case 'REMOVE_JOB_FROM_FAVS':
        return {
          ...state,
          jobs: [...state.favourites.jobs.filter(
            (job) => job.id !== action.payload.id)],
          
        }

      default:
        return state
    }
  }
  