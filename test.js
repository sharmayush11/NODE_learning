function getUser(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            const user = [
                { id : 1 , name : 'ayu' },
                { id : 2 , name : 'vaasu'}
            ]
            resolve(user)
        }, 2000);
    })
}
function getOrder(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            const order = [
                { id : 101 , product : 'Laptop' },
                { id : 102 , product : 'Television' }
            ]
            resolve(order)
        }, 2000);
    })
}
function getProduct() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = [
                { id: 201, product: "Headphone" },
                { id: 202, product: "Phone" }
            ];
            resolve(product);
        }, 2000);
    })
}
//Promise all
async function main(){
    const [user , product , order] = await Promise.all([
        getUser(),getProduct(),getOrder()
    ])
    console.log(user);
    console.log(product);
    console.log(order);
}
main()