
const cars = {
  "cars": [
    {
        "carId": 1,
        "name": "Bugatti Chiron",
        "description": "Leaving the 99.99 percent in its dust, the Chiron is a 1500-hp smackdown of every hypercar ever produced.",
        "price": "$3,000,000",
        "rentPrice": "$22,000/Day",
        "engine": "8.0L Quad-Turbocharged W16",
        "category": "Exotic",
        "image": "../../../static/img/bugatti.jpg"

    },
    {  
        "carId": 2,
        "name": "Ferrari 458",
        "description": "In terms of performance, the 458 will likely take the breath away from even the most jaded of drivers. Acceleration is blinding and this mexotic is so responsive, you'd think it was hard-wired to your brain.",
        "price": "$250,000",
        "rentPrice": "$1,700/Day",
        "engine": "4.5L V8",
        "category": "Exotic",
        "image": "../../../static/img/ferrari2.jpg"
    },
    {
        "carId": 3,
        "name": "McLaren 720s",
        "description": "So now we know that this car makes...710 horsepower. Wait, what? Yes, that's what you get when you get a 720s.",
        "price": "$300,000",
        "rentPrice": "$2,000/Day",
        "engine": "4.0L V8 ",
        "category": "Exotic",
        "image": "../../../static/img/McLaren.jpg"

    },
    {
        "carId": 4,
        "name": "Maserati GranTurismo",
        "description": "Shoppers in the market for a $100,000-plus performance coupe understandably have high expectations. You can't go wrong.",
        "price": "$130,000",
        "rentPrice": "$1,200/Day",
        "engine": "4.7L V8",
        "category": "Exotic",
        "image": "../../../static/img/maserati2.jpg"

    },
    
    {
        "carId": 5,
        "name": "Lamborghini Huracan",
        "description": "Does logic apply when renting a Lambo? Not much, we suspect. But if you need help choosing, go for the Huracan, which is the lightest and least expensive of them all",
        "price": "$200,000",
        "rentPrice": "$1,500/Day",
        "engine": "5.2L V10",
        "category": "Exotic",
        "image": "../../../static/img/lambo2.jpg"
    },
  
    {
        "carId": 6,
        "name": "Camaro ZL1",
        "description": "There's no loser in the bunch, but for us the sweet spot in the Camaro range is the ZL1, which gets you the Camaro's 6.2-liter V8 for that authentic muscle-car experience.",
        "price": "$60,000",
        "rentPrice": "$600/Day",
        "engine": "6.2L V8",
        "category": "Sport",
        "image": "../../../static/img/zl1.jpg"

    },
    {
        "carId": 7,
        "name": "Audi R8",
        "description": "Audi’s luscious R8 coupe and convertible are beautiful to behold, easy to live with, and simply marvelous to drive—everything you’d want in a car.",
        "price": "$150,000",
        "rentPrice": "$1,300/Day",
        "engine": "5.2L V10",
        "category": "Exotic",
        "image": "../../../static/img/R8.jpg"

    },
    {
        "carId": 8,
        "name": "Porsche 911 Turbo S",
        "description": "For decades, the 911 Turbo has been the stuff of legends, and it remains so today.",
        "price": "$190,000",
        "rentPrice": "$1,600/Day",
        "engine": "3.6L V6",
        "category": "Sport",
        "image": "../../../static/img/911.jpg"

    },
    {
        "carId": 9,
        "name": "Corvette ZR1",
        "description": "As a targa or a convertible, the ZR1’s flamboyant bodywork clearly denotes it as the pinnacle of the Corvette lineup.",
        "price": "$120,000",
        "rentPrice": "$1,200/Day",
        "engine": "6.2L V8",
        "category": "Sport",
        "image": "../../../static/img/zr1.jpg"

    },
    {
        "carId": 10,
        "name": "BMW M4",
        "description": "Get behind the wheel of the M4 and prepare for explosive acceleration and razor-sharp handling.",
        "price": "$70,000",
        "rentPrice": "$800/Day",
        "engine": "3.6L V6",
        "category": "Sport",
        "image": "../../../static/img/M4.jpg"

    },
    {
        "carId": 11,
        "name": "Nissan 370Z Nismo",
        "description": "The 2018 Nissan 370Z leaves much to be desired as both a performance machine and as a daily driver, especially when NISMO-fied",
        "price": "$45,000",
        "rentPrice": "$400/Day",
        "engine": "3.7L V6",
        "category": "Sport",
        "image": "../../../static/img/370z.jpg"

    },
    {
        "carId": 12,
        "name": "Nissan GTR Nismo",
        "description": "Doesn’t matter what you call it—GT-R or, more fittingly, Godzilla—Nissan’s range topper is a supercar-stomping, high-tech dynamo.",
        "price": "$175,000",
        "rentPrice": "$1,400/Day",
        "engine": "3.8L V6",
        "category": "Sport",
        "image": "../../../static/img/gtrNismo.jpg"
    }, 
   
    {
        "carId": 13,
        "name": "Alfa Romeo Giulia",
        "description": "An emotional, hot-blooded Italian sedan, the Giulia sets pulses racing even before you get behind the wheel.",
        "price": "$40,000",
        "rentPrice": "$350/Day",
        "engine": "2.9L V6",
        "category": "Luxury",
        "image": "../../../static/img/alfa.jpg"

    },
    {
        "carId": 14,
        "name": "Mercedes S550",
        "description": "Say you have a massive pile of cash earmarked for a big, comfortable convertible, but you’re not feeling what Bentley or Rolls-Royce are putting down. The S550 is the only choice.",
        "price": "$90,000",
        "rentPrice": "$900/Day",
        "engine": "4.7L V8",
        "category": "Luxury",
        "image": "../../../static/img/s550.jpg"

    },
    {
        "carId": 15,
        "name": "BMW 750LI",
        "description": "BMW 7 Series is no longer the athlete of the flagship luxury sedan class, but its blend of comfort, luxury and driver involvement give it wide appeal.",
        "price": "$80,000",
        "rentPrice": "$800/Day",
        "engine": "4.4L V8",
        "category": "Luxury",
        "image": "../../../static/img/750LI.jpg"

    },
    {
        "carId": 16,
        "name": "Audi A8",
        "description": "The A8 is the king of Audi’s luxury sedans, packed with tech including autonomous driving features and luxury options—including a foot warmer for rear-seat passengers.",
        "price": "$80,000",
        "rentPrice": "$800/Day",
        "engine": "3.0L V6",
        "category": "Luxury",
        "image": "../../../static/img/a8.jpg"
    },
    {
        "carId": 17,
        "name": "Cadillac CT6",
        "description": "Sleek styling and high-tech features help the CT6 shed the Cadillac clichés in an attempt to best its European rivals.",
        "price": "$90,000",
        "rentPrice": "$900/Day",
        "engine": "3.0L V6 Twin Turbo",
        "category": "Luxury",
        "image": "../../../static/img/ct6.jpg"
    },
    {
        "carId": 18,
        "name": "Bentley Continental GT",
        "description": "Abundance. Wretched excess. More than adequate. If any of these phrases gives you a warm, fuzzy feeling, then you'll probably fall in love with the Bentley Continental GT.",
        "price": "$220,000",
        "rentPrice": "$1,600/Day",
        "engine": "6.0L V12",
        "category": "Luxury",
        "image": "../../../static/img/gt.jpg"
    },
    

  ]
};
export default cars;

