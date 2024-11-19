import PropertyCard from '@/components/PropertyCard';
import Property from '@/models/Property';
import connectDB from '@/config/database';
import Pagination from '@/components/Pagination';

const PropertiesPage = async ({ searchParams: { page = 1, pageSize = 3} }) => {
  
  await connectDB();

  const skip = (page - 1) * pageSize;

  const total = await Property.countDocuments({});
  const properties = await Property.find({}).skip(skip).limit(pageSize);

  return (
    <>
      <section className='bg-[#573548] py-4'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start'>
 
        </div>
      </section>
      <section className='px-4'>
        <div className='container-xl lg:container m-auto px-4 py-6'>
          {/* <h1 className='text-2xl mb-4'>Browse Properties</h1> */}
          {properties.length === 0 ? (
            <p>No properties found</p>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {properties.map((property, index) => (
                <PropertyCard property={property} key={index} />
              ))}
            </div>
          )}
          <Pagination 
            page={parseInt(page)}
            pageSize={parseInt(pageSize)}
            totalItems={total}
          />
        </div>
      </section>
    </>
  );
};

export default PropertiesPage;
