function queueTime(customers, n) {
    let time = 0;
    if (n === 1) {
      for (customer of customers) {
        time += customer;
      }
    } else if (n >= customers.length) {
      time = Math.max(...customers);
    } else {
      let tills = [];
      for(let i = 0; i < n; i++) {
        tills.push(customers.shift());  
      }
      while (customers.length > 0 || tills.reduce((pv, cv) => pv + cv, 0) > 0) {
        let fastestCustomer = Math.min.apply(null, tills.filter(Boolean));
        time += fastestCustomer;
        for(let i = 0; i < n; i++) {
          if (!Number.isNaN(tills[i] - fastestCustomer)) {
            if (tills[i] - fastestCustomer < 0) {
              tills[i] = 0;
            } else {
              tills[i] -= fastestCustomer; 
            }
          }
        }
        for (let i = 0; i < n; i++) {
              if (tills[i] <= 0) {
                let nextcustomer = customers.shift();
                if (nextcustomer != undefined) {
                  tills[i] = nextcustomer;
                }
              }
          }
      }
    }
    return time;
  }