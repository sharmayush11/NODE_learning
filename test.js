function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const user = {
                id: 1,
                name: "Ayush"
            };

            resolve(user);
        }, 1000);
    });
}


function getOrders(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const order = {
                id: 101,
                userId: userId,
                product: "Laptop"
            };

            resolve(order);
        }, 1000);
    });
}


function getPayment(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const payment = {
                orderId: orderId,
                status: "Paid"
            };

            resolve(payment);
        }, 1000);
    });
}


// Promise Chaining

getUser()
    .then((user) => {
        console.log("User:", user);
        return getOrders(user.id);
    })
    .then((order) => {
        console.log("Order:", order);
        return getPayment(order.id);
    })
    .then((payment) => {
        console.log("Payment:", payment);
    })
    .catch((error) => {
        console.log("Error:", error);
    });