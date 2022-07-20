import NutritionCard from "components/NutritionCard/NutritionCard";

export default function NutritionFeed(props){
     if(Object.keys(props.nutrition) <= 0){
        return (
        <div className="nutrition-feed">
        </div>
        )
    }
    else{
        const arr = props.nutrition.nutrition;
    return (
        <div className="nutrition-feed">
            {arr.map((e,idx) => (
                <NutritionCard calories={e.calories} category={e.category} imageUrl={e.image_url} createdAt={e.created_at} name={e.name}/>
            ))}
        </div>  
    )
}  

}