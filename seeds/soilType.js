var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Demo', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('connected')
})
const soilType = new mongoose.Schema({
    Name:        String,
    Nutrients:   String,
    Description: String,
    image:       String,
    map:         String 
    });

const soil = mongoose.model("soil",soilType);

const soiltypes=[
    {
        Name:'Alluvial Soil',
        Nutrients: ' potash, phosphoric acid and lime ',
        Description:'Alluvial soil as a whole are very fertile.It is ideal for the growth of sugarcane, paddy, wheat, and other cereal and pulse crops.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Alluvium.JPG',
        map: ''
    },
    {
        Name:'Black Soil',
        Nutrients: '  They are rich in soil nutrients, such as calcium carbonate, magnesium, potash and lime. These soils are generally poor in phosphoric contents. ',
        Description:'The black soils are made up of clayey soil, well-known for their capacity to hold moisture. Because of their high clay content, black soils develop wide cracks during the dry season, but their iron-rich granular structure makes them resistant to wind and water erosion. They are poor in humus yet highly moisture-retentive, thus responding well to irrigation. Those soils are also found on many peripheral tracts where the underlying basalt has been shifted from its original location by fluvial processes. The sifting has only led to an increased concentration of clastic contents.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/A_farm_waiting_for_rain%2C_note_black_regur_soil_-_panoramio.jpg',
        map: ''
    },
    {
        Name:'Red Soil',
        Nutrients: ' In general these soils are deficient in lime, magnesia, phosphates, nitrogen, humus and potash. Intense leaching is a menace to these soils. Their chemical composition include non-soluble material 90.47%, iron 3.61%, aluminium 2.92%, organic matter 1.01%, magnesium 0.70%, lime 0.56%, carbon dioxide 0.30%, potash 0.24%, soda 0.12%, phosphorus 0.09% and nitrogen 0.08%. However significant regional differences are observed in the chemical composition.',
        Description:'Red soil is a type of soil that develops in a warm, temperate, moist climate under deciduous or mixed forest, having thin organic and organic-mineral layers overlying a yellowish-brown leached layer resting on an illuvium red layer. Red soils are generally derived from crystalline rock. They are usually poor growing soils, low in nutrients and humus and difficult to be cultivated because of its low water holding capacity.These soils can be found around in large tracts of western Tamil Nadu,Karnataka, southern Maharashtra, Chhattisgarh, Telangana, Andhra Pradesh, Odisha and Chotanagpur plateau of Jharkhand and Scattered patches are also seen in (West Bengal), Mirzapur, Jhansi, Banda, Hamirpur (Uttar Pradesh), Udaipur, Chittaurgarh, Dungarpur, Banswara and Bhilwara districts (Rajasthan).',
        image: 'https://5.imimg.com/data5/LK/ON/MY-5308089/red-soil-2fred-mud-2fsemman-500x500.jpg',
        map: ''
    },
    {
        Name:'Laterite soil',
        Nutrients: 'These soils mainly contain iron oxide which gives them characteristic pink or red color. They are mostly used for construction purposes',
        Description:'Laterite soils are mainly found in Karnataka, Kerala, Tamil Nadu, Madhya Pradesh, and the hilly areas of Odisha and Assam. After adopting appropriate soil conservation techniques particularly in the hilly areas of Karnataka, Kerala and Tamil Nadu, this soil is very useful for growing tea and coffee. Red laterite soils in Tamil Nadu, Andhra Pradesh and Kerala are more suitable for crops like cashew nut. The laterite soil develops in areas with high temperature and heavy rainfall. This is the result of intense leaching due to heavy rain. Humus content of the soil is low because most of the microorganisms, particularly the decomposers, like bacteria, get destroyed due to high temperature. ',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Abandoned_laterite_quarry._C_014.jpg',
        map: ''
    },
     ]
soil.insertMany(soiltypes).then(res=>{
    console.log(res)
}).catch(err =>{
    console.log(err)
})