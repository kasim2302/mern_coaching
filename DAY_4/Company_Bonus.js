

const Company_Bonus = (arr) => {
   
    const display_customer = arr.map(e => ({
        id: e.id,
        customer: e.customer,
        Amount: e.amount,
        Status: e.status
    }))

    const completed_orders = arr.filter( order => order.status === "Completed")

    const find_order = arr.find(order => order.id === 3)

    const total_revenue = arr.reduce((total,customer) => total + customer.amount ,0)

    return {display_customer,completed_orders,find_order,total_revenue}
}

console.log(Company_Bonus([ { id: 1, customer: "John", amount: 5000, status: "Completed" }, { id: 2, customer: "David", amount: 3000, status: "Pending" }, { id: 3, customer: "Sam", amount: 7000, status: "Completed" }, { id: 4, customer: "Peter", amount: 2000, status: "Pending" } ]));
