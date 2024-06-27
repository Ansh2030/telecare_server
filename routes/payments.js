import express from 'express';
import Razorpay from 'razorpay';
const router = express.Router();
import crypto from 'crypto';
const app = express();
app.use(express.json());


router.post("/validate",async(req, res)=>{
    console.log(req.body);
const{ razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body;
const sha = crypto.createHmac("sha256", process.env.key_secret);
sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
const digest = sha.digest("hex");
if(digest!==razorpay_signature){
    return res.status(400).json({msg:"transaction not legit"});
}
res.json({
    msg:"success",
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id
})
})

router.post('/order', async (req, res)=>{

    try{

        const razorpay = new Razorpay({
            key_id: process.env.key_id,
            key_secret: process.env.key_secret
        })
       

        const options = {
            amount: req.body.amount, // amount in the smallest currency unit
            currency: req.body.currency,
            receipt: req.body.receipt
        };
        // console.log(options);
        const order = await razorpay.orders.create(options);
        // console.log(order);
        if(!order){
            return res.status(500).send("error")
        }
        res.json(order);
    }
    catch(err){
        console.log(err);
        res.status(500).send("eror")
    }
  
})

export default router;