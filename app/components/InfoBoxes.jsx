import InfoBox from './InfoBox';

const InfoBoxes = () => {
  return (
    <section>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <InfoBox
            heading='For Renters'
            backgroundColor='bg-gray-100'
            buttonInfo={{
              text: 'Browse Properties',
              link: '/properties',
              backgroundColor: 'bg-purple-500',
            }}
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </InfoBox>
          <InfoBox
            heading='For Property Owners'
            backgroundColor='bg-purple-200'
            buttonInfo={{
              text: 'Add Your Property',
              link: '/properties/add',
              backgroundColor: 'bg-purple-500',
            }}
          >
            List your properties and reach potential tenants. 
          </InfoBox>
        </div>
      </div>
    </section>
  );
};
export default InfoBoxes;
