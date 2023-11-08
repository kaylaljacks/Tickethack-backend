
const cartSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: String,
    price: Number,
   });
   
   const Book = mongoose.model('carts', cartSchema);