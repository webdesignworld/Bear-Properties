import connectDB from "@/config/database";
import Property from "@/models/Property";



export const GET = async () => {
try{ 
await connectDB();

const properties = await Property.find({}).lean();

       return new Response(properties, {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
}catch (error){
return  new Response("Something went wrong", {status: 500});
}


 
    };
    