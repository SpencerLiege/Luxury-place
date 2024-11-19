import InfoBox from "./InfoBox";
const InfoBoxes = () => {
    return ( 
    <section>
        <div className='container-xl lg:container m-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
            <InfoBox
                heading='For Renters'
                backgroundColor='bg-[#edcdb1]/40'
                buttonInfo={{
                text: 'Browse Properties',
                link: '/properties',
                backgroundColor: 'bg-zinc-700',
                }}
            >
                Find your dream rental property. Bookmark properties and contact
                owners.
            </InfoBox>
            <InfoBox
                heading='For Property Owners'
                backgroundColor='bg-[#573548]/20'
                buttonInfo={{
                text: 'Add Property',
                link: '/properties/add',
                backgroundColor: 'bg-[#573548]',
                }}
            >
                List your properties and reach potential tenants. Rent as an Airbnb
                or long term.
            </InfoBox>
            </div>
        </div>
    </section>
     );
}
 
export default InfoBoxes;