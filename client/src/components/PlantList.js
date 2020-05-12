import React from 'react';
import PlantListItem from './PlantListItem';

export default function PlantList(props) {
  const plants = [{
    description: "Carrots are a popular root vegetable that are easy to grow in sandy soil. They are resistant to most pests and diseases, and are a good late season crop that can tolerate frost. Not all carrots are orange; varieties vary in color from purple to white.",
    diseases: "Aster Yellow Disease will cause shortened and discolored carrot tops and hairy roots. This disease is spread by pests as they feed from plant to plant. Keep weeds down and invest in a control plan for pests such as leafhoppers. This disease has the ability to overwinter.",
    feeding: "n/a",
    growing_from_seed: "Plant seeds 3-4 inches apart in rows. Rows should be at least a foot apart.",
    harvesting: "Carrots are mature at around 2 ½ months and ½ inch in diameter. You may harvest whenever desired maturity is reached.↵You may leave mature carrots in the soil for storage if the ground will not freeze.",
    id: 4,
    image_url: "https://res-1.cloudinary.com/do6bw42am/image/upload/c_scale,f_auto,h_300/v1/harvest_helper_production/04_carrot",
    name: "Carrots",
    optimal_soil: "Sandy, Neutral pH",
    optimal_sun: "Full Sun(at least 6 hours a day)",
    other_care: "Gently mulch to retain moisture, speed germination and block the sun from the roots. Soil should be well drained and loose to prevent forking and stunting of the root growth. Carrots taste much better after a couple of frosts. Following the first hard frost in the fall, cover carrot rows with an 18-inch layer of shredded leaves to preserve them for harvesting later.",
    pests: "Wireworms, Flea Beetles",
    planting_considerations: "Carrots are biennial plants. If you leave them in the ground, the tops will flower and produce seeds the second year.",
    spacing: "Final spacing should be 3-4 inches in all directions.",
    storage_use: "To store freshly harvested carrots, twist off the tops, scrub off the dirt under cold running water, let dry and seal in airtight plastic bags, and refrigerate. If you simply put fresh carrots in the refrigerator, they’ll go limp in a few hours.",
    transplanting: "Transplanting carrots is not recommended.",
    watering: "Water at least one inch per week.",
    when_to_plant: "Plan to plant seeds outdoors 3 to 5 weeks before the last spring frost date.",
  },
  {
    description: "Parsnips, popular with ancient Greeks and Romans, were brought over to the Americas with the first colonists. Although parsnips are biennials, they are usually grown as an annual vegetable. Parsnips are a hardy, cool-season crop that is best harvested after a hard frost. Parsnips are not only tasty in soups and stews, but can also be enjoyed by themselves.",
    diseases: "n/a",
    feeding: "Always keep the beds free of weeds.",
    growing_from_seed: "Sow 2 seeds per inch ½ an inch deep. Seedlings will emerge in 2-3 weeks.",
    harvesting: "Parsnips mature in about 16 weeks. Leave your parsnips in the ground for a few frosts but harvest before the ground freezes. If you leave them in the ground for the winter, cover them with a thick layer of mulch and harvest immediately after the ground thaws in the spring.",
    id: 22,
    image_url: "https://res-1.cloudinary.com/do6bw42am/image/upload/c_scale,f_auto,h_300/v1/harvest_helper_production/22_parsnips",
    name: "Parsnips",
    optimal_soil: "Loamy, Sandy, Mildly Acidic-Neutral pH",
    optimal_sun: "Full-Part Sun",
    other_care: "n/a",
    pests: null,
    planting_considerations: "Always sow fresh seed.",
    spacing: "Final plant spacing should be 4-6 inches apart in all directions.",
    storage_use: "n/a",
    transplanting: "Thin or transplant seedlings to stand 3-6 inches apart.",
    watering: "Water during the summer if rainfall is less than 1 inch per week.",
    when_to_plant: "Parsnips need a long growing season, so sow as soon as the soil is workable."
  },
  {
    description: "This is a half-hardy vegetable that you can keep growing all season long by planting one small crop at a time. Days to maturity tend to be short. Garden lettuce is far superior, in both taste and vitamin A content, to supermarket brands.",
    diseases: "White Mold",
    feeding: "n/a",
    growing_from_seed: "Plant seeds ½ inch deep.",
    harvesting: "Lettuce should be harvested when full size, but just before maturity. You want it young and tender. Before maturity, you can harvest leaf lettuce by simply removing outer leaves so that the center leaves can continue to grow. Butterhead or romaine types can be harvested by removing the outer leaves, digging up the whole plant or cutting the plant about an inch above the soil surface. A second harvest is often possible this way. Crisphead lettuce is picked when the center is firm. It’s best to harvest in the morning before leaves have been exposed to sun.",
    id: 3,
    image_url: "https://res-1.cloudinary.com/do6bw42am/image/upload/c_scale,f_auto,h_300/v1/harvest_helper_production/03_lettuce",
    name: "Lettuce",
    optimal_soil: "Loamy",
    optimal_sun: "Part Sun",
    other_care: "You should be able to sow additional seeds every two weeks for a continuous harvest throughout the growing season.",
    pests: "Aphids, Earwigs",
    planting_considerations: "Consider planting rows of chives or garlic between your lettuce to control aphids. They act as “barrier plants” for the lettuce.  Planning your garden so that lettuce will be in the shade of taller plants, such as tomatoes or sweet corn, in the heat of the summer, may reduce bolting as well.",
    spacing: "Final spacing for Cos and loose-headed types should be 8 inches in all directions and 16 inches for firm-headed types.",
    storage_use: "n/a",
    transplanting: "Leaf lettuce: Plant 4 inches apart. Cos and loose-headed types: Plant 8 inches apart. Firm-headed types: Plant 16 inches apart.",
    watering: "Make sure soil remains moist but is well-drained. Lettuce will tell you when it needs water. Just look at it. If the leaves are wilting, sprinkle them anytime—even in the heat of the day—to cool them off and slow down the transpiration rate.",
    when_to_plant: "Lettuce is a cool-season crop that grows well in the spring and fall in most areas. Lettuce seedlings will even tolerate a light frost. 45-65°F is the ideal temperature. Start seeds indoors 4 to 6 weeks before last spring frost date for earliest crop. Direct sowing is recommended as soon as the ground can be worked. Snow won’t hurt them, but a desiccating cold wind will. Harden off seedlings for about one week, and transplant outside between 2 weeks before and 2 weeks after last spring frost."
  }
  ]


  const plantArray = plants.map(plant =>
    <PlantListItem
      key={plant.id}
      name={plant.name}
      description={plant.description}
      feeding={plant.feeding}
      diseases={plant.description}
      growing_from_seed={plant.growing_from_seed}
      harvesting={plant.harvesting}
      img={plant.image_url}
      optimal_soil={plant.optimal_soil}
      other_care={plant.other_care}
      pests={plant.pests}
      planting_considerations={plant.planting_considerations}
      spacing={plant.spacing}
      storage={plant.storage_use}
      transplanting={plant.transplanting}
      watering={plant.watering}
      when_to_plant={plant.when_to_plant}
    />
  )



  return (
    <ul>
      {plantArray}
    </ul>
  )
}