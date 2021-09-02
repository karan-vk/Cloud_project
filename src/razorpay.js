import axios from 'axios'
const rzpss =async ({name, amount,email,phone}) => {
    const razor = await axios.post("https://grootree.herokuapp.com/payments")
    var options = {
        "key": "rzp_test_dS9SEUGv63RPnk", 
        "amount": `${amount}`, 
        "currency": "INR",
        "name": "GROOT",
        "description": "Test Transaction",
        "image": "https://res.cloudinary.com/ramachandra-engineering-and-technology/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1630165593/photo_2021-08-28_21-16-15_biunn8.jpg",
        "order_id": razor.data.orderId, 
        "handler": function (response){
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
        },
        "prefill": {
            "name": name,
            "email": email,
            "contact": phone
        },
        "theme": {
            "color": "#198c38"
        }
    }
    var rzp1 = new Razorpay(options);
    
    rzp1.open();
}

export default rzpss