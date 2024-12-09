
import connectDB from "@/config/database";
import Property from "@/models/Property";
import PropertyHeaderImage from "@/app/components/PropertyHeaderImage";
import PropertyDetails from "@/app/components/PropertyDetails";
import PropertyImages from "@/app/components/PropertyImages";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const PropertyPage = async ({ params }) => {
  await connectDB();

  // Fetch property document
  const propertyDoc = await Property.findById(params.id).lean();

  // Handle invalid property or errors
  if (!propertyDoc) {
    return (
      <div className="container m-auto py-10 px-6 text-center">
        <p className="text-red-500 text-lg">Property not found.</p>
        <Link
          href="/"
          className="text-blue-500 hover:text-blue-600 flex items-center mt-4"
        >
          <FaArrowLeft className="mr-2" />
          Back to Properties
        </Link>
      </div>
    );
  }

  return (
    <>
      <PropertyHeaderImage image={propertyDoc.images[0]} />
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Properties
          </Link>
        </div>
      </section>
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <PropertyDetails property={propertyDoc} />
          </div>
        </div>
      </section>
      <PropertyImages images={propertyDoc.images} />
    </>
  );
};

export default PropertyPage;
