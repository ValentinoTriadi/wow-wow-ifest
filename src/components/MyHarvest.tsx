const harvests = [
    { id: 1, type: 'TERNAK SAPI', location: 'Jatinangor', owner: 'Sumarno', image: '/path/to/image2.jpg' },
    { id: 2, type: 'PERTANIAN UBI', location: 'Jatinangor', owner: 'Sumarno', image: '/path/to/image3.jpg' },
    // Add more harvests here
  ]
  
  const MyHarvest = () => {
    return (
      <div className="grid grid-cols-2 gap-4">
        {harvests.map((harvest) => (
          <div key={harvest.id} className="bg-white p-4 rounded shadow-md">
            <img src={harvest.image} alt={harvest.type} className="w-full h-32 object-cover rounded mb-2" />
            <h4 className="text-lg font-semibold">{harvest.type}</h4>
            <p className="text-sm text-gray-600">{harvest.location}</p>
            <p className="text-sm text-gray-600">{harvest.owner}</p>
          </div>
        ))}
      </div>
    )
  }
  
  export default MyHarvest
  