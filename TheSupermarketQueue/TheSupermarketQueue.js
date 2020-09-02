function queueTime(customers, n) {
    let time = 0;
    if (n === 1) {
      for (customer of customers) {
        time += customer;
      }
    } else {
      // Distribute the customers to n tills
      // Keep track of waiting time at till x
      // Fill empty tills immediately
    }
    return time;
  }