export const incrementCount = count => {
    
    return {
    type: 'INCREMENT_COUNT',
    count:  count+1
    }
  }
  
  export const decrementCount = count => {
    
    return {
      type: 'DECREMENT_COUNT',
      count:  count-1
    }
  }