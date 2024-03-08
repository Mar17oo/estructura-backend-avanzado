import Car from "../models/Car.js"

//Create ✅

const createCar =  async (req, res) => {
    const newCar = await Car.create(req.body);
    /**car.create({
        brand:'Toyota',  
        model: 'Camry',  
        year:2018,
        color:"blue", 
        price:35000
      }) 
      .then(car=>{res.status(200).json(car)})
      .catch(err=>{res.status(400).json("Error creating      the car")})
    } */
    
    res.json(newCar);
};
   
//Read
//Get all cars ✅
const getAllCars = async (req, res)=>{
    const cars = await Car.find();
  //console.log(cars);
    res.json(cars);
};

//Get one car by id ✅

const getCarById  = async (req, res) =>{
     const car = await Car.findById(req.params.carid); 
    };
//Update
const updateCar = async (req, res) => {
    //Deconstrucción objetos JS
    //const carID = req.params.carid;const { cardId } = req.params;

      const {carId } = req.params;
      //1.- Filtro 2.- Nuevos campos
      const updatedCar = await Car.updateOne(
        {
          _id: carId,
        },
        req.body
      );
      res.json(updatedCar);
    };
    

//DELETE

export { createCar, getAllCars, getCarById, updateCar };
