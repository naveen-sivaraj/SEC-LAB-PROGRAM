 //promise
        //levels of stages
        // pendng => intial state , operation not completed yet 
        // FllField (resolved) => operation copmpleted sucessfully 
        // Regeted => opertaion failed 
        //.then()  


        // let Ticketbooking = new Promise((resolve, reject) => {
        //     let booking = false;
        //     if (booking)
        //         resolve()
        //     else
        //         reject()
        //     function success() {
        //         console.log("your tickt has booked")
        //     }
        //     function failure() {
        //         console.log("no seat has booked")
        //     }

        // })
        //     .then(success)
        //     .catch(failure)




        //     //toss coin

        //     let coin=new Promise((resolve,reject)=>{
        //         let ran = Mat.floor(Math.random()*2);
        //         if(ran==0)
        //         resolve(ran)
        //     else
        //     reject(ran)
        //     }
        //     ).then((rand)=>console.log(`your won ${rand}`))
        //     .catch((rand)=>console.log(`your lose${rand}`)) 

        //     async function send() {
        //         return "meg sended"

                
        //     }
        //     send()
        //     function placeOrder(){
        //         return new promise((resolve,reject)=>{
        //             console.log("try to placing ypur order")
        //             setInterval(() => {
        //                 resolve("your order placed")
        //             }, 2000);
        //         })

        //     }
        //     async function trackOder(){

        //     }
            async function orderStatus(){
                const Status=await placeOrder()
                console.log(Status)

                trackDelivery();
            }
            orderStatus()
            